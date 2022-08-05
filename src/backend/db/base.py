import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

from core.settings import DB_URL

engine = create_engine(DB_URL)
metadata = sqlalchemy.MetaData(engine)
Session = sessionmaker(engine)
Base = declarative_base()


def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()
