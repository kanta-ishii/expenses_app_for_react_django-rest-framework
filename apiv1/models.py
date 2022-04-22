import uuid
from django.utils import timezone
from django.db import models
from django.db.models import UUIDField, CharField, IntegerField, DateField, BooleanField, ForeignKey


class Cost(models.Model):

    class Meta:
        db_table: str = 'cost'

    id          = UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    store_name  = ForeignKey('store', on_delete=models.PROTECT)
    purchase_on = DateField('purchase_on', default=timezone.now, blank=True)
    is_income   = BooleanField('income', default=False)
    price       = IntegerField('total_price')


class Store(models.Model):

    class Meta:
        db_table: str = 'store'

    name = CharField(verbose_name='store_name', max_length=100)

    def __str__(self) -> str:
        return self.name
