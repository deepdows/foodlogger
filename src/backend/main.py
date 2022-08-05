from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from sqladmin import Admin

from admin import calorie, user
from db.base import Base, engine
from v1.api import router_v1

Base.metadata.create_all(bind=engine)

app = FastAPI(docs_url="/api/docs", redoc_url="/api/redoc")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router_v1, prefix='/api')

admin = Admin(app, engine)
admin.register_model(user.UserAdmin)
admin.register_model(calorie.FoodLogAdmin)

templates = Jinja2Templates(directory="site_static")

app.mount("/static/", StaticFiles(directory="site_static/static"), name="static")

@app.get("/{path_name:path}", response_class=HTMLResponse)
async def home_view(request: Request):
    return templates.TemplateResponse("index.html", {'request': request})