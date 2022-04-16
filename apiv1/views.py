from rest_framework import generics
from rest_framework import viewsets
from rest_framework import request
from rest_framework.response import Response
from rest_framework.decorators import action

from . import models
from . import serializers


class StoreViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    queryset         = models.Store.objects.all()


class CostViewCreate(generics.ListCreateAPIView):
    serializer_class = serializers.CostSerializer
    queryset         = models.Cost.objects.all()

    @action(detail=True, methods=['patch'])
    def patch_cost(self):
        for i in request.data['store_name']:
            if not models.Store.objects.filter(name=i).exists():
                store_serializer = serializers.StoreSerializer(data={'name':i})
                if store_serializer.is_valid():
                    store_serializer.save()
        data = {
            'store_name' : request.data['store_name'],
            'purchase_on': request.data['purchase_on'],
            'price'      : request.data['price']
        }
        serializer = self.serializer_class(data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)