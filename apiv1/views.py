from rest_framework import generics
from rest_framework import viewsets

from . import models
from . import serializers


class StoreViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    queryset         = models.Store.objects.all()


class CostViewCreate(generics.ListCreateAPIView):
    serializer_class = serializers.CostSerializer
    queryset         = models.Cost.objects.all()