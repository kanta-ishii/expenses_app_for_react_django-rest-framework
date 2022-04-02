from rest_framework import serializers
from . import models


class CostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cost
        fields = '__all__'
    