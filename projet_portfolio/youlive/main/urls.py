from django.urls import path, include
from youlive.youlive.views import (
    index, contact, gallery, events,
    event_page, auth_event, services, private_policy, terms_of_service 
)

urlpatterns = [
    path('', index, name='index'),
    path('contact/', contact, name='Contact - YOULIVE'),
    path('gallery/', gallery, name='Galerie - YOULIVE'),
    path('events/', events, name='Événements'),
    path('events/eventPage.html/', event_page, name='events - YOULIVE'),
    path('eventPage/authEvent/', auth_event, name='Authentification de l\'événement - YOULIVE'),
    path('services/', services, name='Prestations - YOULIVE'),
    path('private_Policy/', private_policy, name='Private Policy - YOULIVE'),
    path('terms_of_service/', terms_of_service, name='Terms of Service - YOULIVE'),
]
