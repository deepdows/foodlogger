from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Numeric, SmallInteger
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid

from db.base import Base, engine

class FoodLog(Base):
    __tablename__ = 'food_log'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(100), nullable=False)
    weight = Column(SmallInteger, nullable=False)

    fats = Column(Numeric(4,1), nullable=False, default=0)
    calories = Column(Numeric(5,1), nullable=False, default=0)
    carbohydrates = Column(Numeric(4,1), nullable=False, default=0)
    sugar = Column(Numeric(4,1), nullable=False, default=0)
    salt = Column(Numeric(4,1), nullable=False, default=0)
    protein = Column(Numeric(4,1), nullable=False, default=0)

    created_date = Column(DateTime, default=datetime.now)

    user_id = Column(
        Integer, 
        ForeignKey('user.id', ondelete='CASCADE'), 
        nullable=False,
    )
    user = relationship('User')


Base.metadata.create_all(engine)