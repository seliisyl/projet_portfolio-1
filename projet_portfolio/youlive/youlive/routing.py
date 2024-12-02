from django.urls import path
from . import consumers

websocket_urlpatterns = [
path('ws/socket.io/', consumers.YourConsumer.as_asgi()),
]