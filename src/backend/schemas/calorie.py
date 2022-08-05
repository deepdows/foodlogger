from pydantic import BaseModel, validator
from typing import Optional
from datetime import datetime
from .core import to_camel
from uuid import UUID

class FoodBase(BaseModel):
    name: str
    weight: int
    calories: float
    fats: Optional[float] = 0
    carbohydrates: Optional[float] = 0
    sugar: Optional[float] = 0
    salt: Optional[float] = 0
    protein: Optional[float] = 0

    @validator("name")
    def name_validator(cls, value):
        value = value.strip()
        if len(value) < 2:
            raise ValueError("Name is too small")
        if len(value) > 100:
            raise ValueError("Name is more than 100 chars")
        return value


class FoodCreate(FoodBase):
    pass


class FoodUpdate(BaseModel):
    id: UUID

    class Config:
        alias_generator = to_camel
        allow_population_by_field_name = True


class FoodShow(FoodBase):
    id: UUID
    created_date: datetime

    class Config:
        orm_mode = True
        alias_generator = to_camel
        allow_population_by_field_name = True
