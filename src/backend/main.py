from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from v1.api import router_v1
from db.base import Base, engine
from sqladmin import Admin
from admin import user, calorie

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router_v1)

admin = Admin(app, engine)
admin.register_model(user.UserAdmin)
admin.register_model(calorie.FoodLogAdmin)