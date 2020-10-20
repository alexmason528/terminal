from rest_framework.viewsets import ModelViewSet
from rest_framework import filters

from .models import Address
from .serializers import AddressSerializer
from .utils import StandardPagination

class AddressViewSet(ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    pagination_class = StandardPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['line1', 'line2', 'city', 'state', 'zipcode']
