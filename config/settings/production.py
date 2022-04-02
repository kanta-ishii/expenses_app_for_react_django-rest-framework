import os
from .base import *


##########################
# Application definition #
##########################

SECRET_KEY = os.environ.get('SECRET_KEY')
DEBUG = False
ALLOWED_HOSTS = ['yourcustomdomain.com', '.yourcustomdomain.com']