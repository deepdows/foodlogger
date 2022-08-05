from dotenv import load_dotenv
import os

load_dotenv()


def get_secret(setting):
    """Get the secret variable or return explicit exception."""
    try:
        return os.environ[setting]
    except KeyError:
        error_msg = f'Set the {setting} environ variable'
        raise error_msg


DB_URL = get_secret('DB_URL')
SECRET_KEY = get_secret('SECRET_KEY')
ALGORITHM = "HS256"
EXPIRE_MINUTES = 30