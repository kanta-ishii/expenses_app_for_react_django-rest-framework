from django.urls import path
from django.urls import include
from rest_framework import routers

from . import views


app_name = 'apiv1'
storeRouter = routers.SimpleRouter()
storeRouter.register('store', views.StoreViewSet)

urlpatterns = [
    path(r'api/v1/cost/', views.CostViewCreate.as_view()),
    path(r'api/v1/', include(storeRouter.urls)),
]
