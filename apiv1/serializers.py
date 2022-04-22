from rest_framework import serializers
from . import models


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Store
        field = ('name',)


class CostSerializer(serializers.ModelSerializer):
    store_name = serializers.CharField()

    class Meta:
        model  = models.Cost
        fields = '__all__'
    
    def create(self, validated_data):
        store_name = validated_data.pop('store_name')
        store_name_instance, created = models.Store.objects.get_or_create(name=store_name)
        article_instance = models.Cost.objects.create(**validated_data, store_name=store_name_instance)
        return article_instance