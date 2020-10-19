from django.db import models

# Create your models here.
class Address(models.Model):
    line1 = models.CharField(max_length=100, verbose_name='line1')
    city = models.CharField(max_length=50, verbose_name='city')
    state = models.CharField(max_length=2, verbose_name='state')
    zipcode = models.CharField(max_length=5, verbose_name='zipcode')
