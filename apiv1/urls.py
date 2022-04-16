from django.urls import path

from . import views

app_name = 'apiv1'

urlpatterns = [
    path(r'api/v1/', views.CostViewCreate.as_view()),
]
