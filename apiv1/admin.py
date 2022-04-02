from django.contrib import admin

from . import models


admin.site.register(models.Cost)
admin.site.register(models.Store)
admin.site.register(models.Item)
