from pydantic import BaseModel
from .core import to_camel


class AuthSchema(BaseModel):
    username: str
    password: str


class UserInfo(BaseModel):
    username: str
    is_superuser: bool

    class Config:
        orm_mode = True
        alias_generator = to_camel
        allow_population_by_field_name = True
