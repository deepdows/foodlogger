from dotenv import load_dotenv
import os

import sentry_sdk
from sentry_sdk.integrations.starlette import StarletteIntegration
from sentry_sdk.integrations.fastapi import FastApiIntegration

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



sentry_sdk.init(
    dsn=get_secret('SENTRY_DSN'),
    integrations=[
        StarletteIntegration(),
        FastApiIntegration(),
    ],

    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production,
    traces_sample_rate=1.0,

    # If you wish to associate users to errors (assuming you are using
    # django.contrib.auth) you may enable sending PII data.
    send_default_pii=True,
)