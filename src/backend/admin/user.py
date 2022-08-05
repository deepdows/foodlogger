from models.user import User
from .core import AuthModelAdmin

class UserAdmin(AuthModelAdmin, model=User):
    column_list = [User.id, User.username, User.is_superuser]
