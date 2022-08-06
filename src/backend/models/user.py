from sqlalchemy import Column, Integer, String, DateTime, Boolean, SmallInteger
from sqlalchemy.orm import relationship
from datetime import datetime

from db.base import Base, engine
# from models.calorie import FoodLog

class User(Base):
    __tablename__ = 'user'
    # __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True)
    username = Column(String(80), nullable=False, unique=True)
    password = Column(String(80), nullable=False)
    is_superuser = Column(Boolean, default=False)
    created_date = Column(DateTime, default=datetime.now)

    calories_per_day = Column(SmallInteger, default=2000, nullable=False)

    # food_log = relationship('FoodLog')

    def __str__(self):
        return self.username
