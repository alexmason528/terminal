from django.conf.urls import url, include

from rest_framework.routers import SimpleRouter

from .views import AddressViewSet

router = SimpleRouter()
router.register(r'', AddressViewSet)

urlpatterns = [
  url(r'', include(router.urls)),
]
