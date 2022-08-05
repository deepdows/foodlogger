from db.base import Session
from fastapi import Request
from sqladmin import ModelAdmin

from core.auth import verify_token
from models.user import User


class AuthModelAdmin(ModelAdmin):
    def _get_user(self, user_id):
        if user_id:
            with Session() as db:
                user = db.query(User).filter_by(id=user_id).first()
                return user

    def _get_user_id(self, token):
        if token:
            current_user = verify_token(token)
            if current_user:
                user_id = current_user.get('id')
                return user_id

    def _is_user_superuser(self, token):
        user_id = self._get_user_id(token)
        user = self._get_user(user_id)
        if user and user.is_superuser:
            return True
        return False

    def is_accessible(
        self,
        request: Request,
    ) -> bool:
        token = request.cookies.get('token')
        return self._is_user_superuser(token)


    def is_visible(
        self,
        request: Request,
    ) -> bool:
        token = request.cookies.get('token')
        return self._is_user_superuser(token)
