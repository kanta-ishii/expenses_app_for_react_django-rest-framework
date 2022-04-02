from . import models
from . import serializers
from rest_framework import generics


class CostViewCreate(generics.ListCreateAPIView):
    queryset = models.Cost.objects.all()
    serializer_class = serializers.CostSerializer
