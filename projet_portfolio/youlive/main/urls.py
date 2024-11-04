from django.urls import path
from youlive.youlive import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contact/', views.contact, name='Contact - YOULIVE'),
    path('gallery/', views.gallery, name='Galerie - YOULIVE'),
    path('events/', views.events, name='Événements'),
    path('events/eventPage.html/', views.event_page, name='events - YOULIVE'),
    path('eventPage/authEvent.html/', views.auth_event, name='Authentification de l\'événement - YOULIVE'),
    path('services/', views.services, name='Prestations - YOULIVE'),
    path('private_Policy/', views.private_policy, name='Politique de confidentialité - YOULIVE'),
    path('terms_of_service/', views.terms_of_service, name='Terms of Service - YOULIVE'),
]
