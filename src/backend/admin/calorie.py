from models.calorie import FoodLog
from .core import AuthModelAdmin

class FoodLogAdmin(AuthModelAdmin, model=FoodLog):
    column_list = [
        FoodLog.id, 
        FoodLog.user, 
        FoodLog.name,
        FoodLog.weight,
        FoodLog.calories,
        FoodLog.created_date,
    ]