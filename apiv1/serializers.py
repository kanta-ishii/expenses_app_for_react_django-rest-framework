from rest_framework import serializers
from . import models


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Store
        field = ('name',)


class CostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cost
        fields = '__all__'
    