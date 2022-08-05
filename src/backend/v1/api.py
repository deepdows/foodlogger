from fastapi import APIRouter
from v1.endpoints.user import router as user_router
from v1.endpoints.calorie import router as calorie_router

router_v1 = APIRouter(prefix="/v1", tags=["v1"])

router_v1.include_router(user_router)
router_v1.include_router(calorie_router)
