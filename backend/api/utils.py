from collections import OrderedDict

from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class StandardPagination(PageNumberPagination):
    page_size = 10
    max_page_size = 100
    page_size_query_param = 'pageSize'

    def get_paginated_response(self, data):
        return Response(
            OrderedDict(
                [
                ('pageSize', self.page_size),
                ('currentPage', self.page.number),
                ('totalCount', self.page.paginator.count),
                ('results', data),
                ]
            )
        )
