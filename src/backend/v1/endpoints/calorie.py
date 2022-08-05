from typing import List
from uuid import UUID
from sqlalchemy import func
from datetime import date

from fastapi.responses import JSONResponse
from fastapi import APIRouter, Depends, HTTPException, Response, status
from sqlalchemy.orm import Session
from sqlalchemy.sql import label

from core.auth import get_current_user
from db.base import get_db
from models.calorie import FoodLog
from models.user import User
from schemas.calorie import FoodCreate, FoodShow, FoodUpdate

router = APIRouter(prefix="/calorie")


@router.post("", status_code=status.HTTP_201_CREATED, response_model=FoodShow)
async def create_foodlog(
    data: FoodCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    foodlog = FoodLog(
        **data.dict(),
        user_id=current_user.get('id'),
    )
    db.add(foodlog)
    db.commit()
    db.refresh(foodlog)

    return foodlog


@router.get("", status_code=status.HTTP_200_OK, response_model=List[FoodShow])
async def get_foodlogs(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    foodlogs = db.query(FoodLog).filter_by(
        user_id=current_user.get('id')
    ).filter(
        func.date(FoodLog.created_date) == date.today()
    ).order_by(FoodLog.created_date.desc()).all()

    return foodlogs


@router.put("/{id}", status_code=status.HTTP_202_ACCEPTED, response_model=FoodShow)
async def update_foodlog(
    id: UUID,
    data: FoodUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    foodlog = db.query(FoodLog).filter_by(
        id=id, user_id=current_user.get('id')
    ).first()

    foodlog.update(**data.dict())
    db.commit()
    return foodlog


@router.delete("/{id}", status_code=status.HTTP_202_ACCEPTED)
async def delete_foodlog(
    id: UUID,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    foodlog = db.query(FoodLog).filter_by(
        id=id, user_id=current_user.get('id')
    ).first()
    if foodlog is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Not Found")
    db.delete(foodlog)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)


def get_percent(limit, value, ndigits=1):
    if value and float(value) != 0:
        return round(float(value) / limit, ndigits)
    return 0


@router.get("/progress", status_code=status.HTTP_200_OK)
async def get_progress(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    foodlogs = db.query(
        label('calories', func.sum(FoodLog.weight * FoodLog.calories)),
        label('fats', func.sum(FoodLog.weight * FoodLog.fats)),
        label('sugar', func.sum(FoodLog.weight * FoodLog.sugar)),
        label('salt', func.sum(FoodLog.weight * FoodLog.salt)),
        label('protein', func.sum(FoodLog.weight * FoodLog.protein)),
        label('ch', func.sum(FoodLog.weight * FoodLog.carbohydrates)),
    ).filter_by(
        user_id=current_user.get('id')
    ).filter(
        func.date(FoodLog.created_date) == date.today()
    ).first()
    user = db.query(User.calories_per_day).filter_by(
        id=current_user.get('id')
    ).first()

    limit_calories = user.calories_per_day
    limit_fats = 50 + (limit_calories - 1500)*0.034
    limit_sugar = limit_calories // 50
    limit_salt = round(limit_calories / 1000, 1)
    limit_protein = limit_calories // 30
    limit_carbohydrates = limit_calories // 8

    data = [
        {
            'category': 'Fats',
            'percent': get_percent(limit_fats, foodlogs.fats),
        },
        {
            'category': "Calories",
            'percent': get_percent(limit_calories, foodlogs.calories),
        },
        {
            'category': "Sugar",
            'percent': get_percent(limit_sugar, foodlogs.sugar),
        },
        {
            'category': "Salt",
            'percent': get_percent(limit_salt, foodlogs.salt),
        },
        {
            'category': "Protein",
            'percent': get_percent(limit_protein, foodlogs.protein),
        },
        {
            'category': "Carbohydrates",
            'percent': get_percent(limit_carbohydrates, foodlogs.ch),
        },
    ]

    return JSONResponse(data)
