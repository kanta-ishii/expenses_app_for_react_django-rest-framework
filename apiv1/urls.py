from django.urls import path

from . import views

app_name = 'apiv1'

urlpatterns = [
    path(r'', views.CostViewCreate.as_view()),
]
