from django.urls import path
from . import views


urlpatterns = [
    path('insights', views.scrape, name="scrape"),
]