from fastapi import APIRouter, Depends, HTTPException, status

from schemas.user import AuthSchema, UserInfo
from db.base import get_db
from sqlalchemy.orm import Session
from core.auth import get_password_hash, verify_password, create_access_token, get_current_user
from models.user import User
from fastapi import HTTPException, status
from core.settings import EXPIRE_MINUTES

router = APIRouter(prefix="/user")


@router.post('/login')
def login(auth_details: AuthSchema, db: Session = Depends(get_db)):
    auth_details.username = auth_details.username.strip()
    user = db.query(User).filter(User.username ==
                                 auth_details.username).first()
    if user is None or not verify_password(auth_details.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password"
        )
    data = {'id': user.id}
    token = create_access_token(data, expire_minutes=EXPIRE_MINUTES)
    return {'token': token}


@router.post('/register')
def register(auth_details: AuthSchema, db: Session = Depends(get_db)):
    auth_details.username = auth_details.username.strip()
    is_username_is_taken = db.query(User).filter(
        User.username == auth_details.username).first()
    if is_username_is_taken:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username is taken"
        )
    if len(auth_details.username) < 4:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username must be at least 4 chars"
        )
    if len(auth_details.password) < 8:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password must be at least 8 chars"
        )

    hashed_password = get_password_hash(auth_details.password)
    auth_details.password = hashed_password
    user = User(**auth_details.dict())
    db.add(user)
    db.commit()
    db.refresh(user)

    data = {'id': user.id}
    token = create_access_token(data, expire_minutes=EXPIRE_MINUTES)
    return {'token': token}


@router.get('', status_code=status.HTTP_200_OK)
def get_user_info(db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    id = current_user.get('id')
    user = db.query(User).filter_by(id=id).first()
    return UserInfo.from_orm(user)
