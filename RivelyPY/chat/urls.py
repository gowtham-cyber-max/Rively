from django.urls import path
from  . import views


urlpatterns = [
    path('insights', views.chat, name='chat'),
]