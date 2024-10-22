from django.urls import path
from youlive.youlive import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contact/', views.contact, name='Contact - YOULIVE'),
    path('gallery/', views.gallery, name='Galerie - YOULIVE'),
    path('events/', views.events, name='Événements'),
    path('eventPage/', views.eventPage, name='Détails de l\'Événement - YOULIVE'),
    path('authEvent/', views.authEvent, name='Authentificationde l\'événement'),
    path('services/', views.services, name='Prestations - YOULIVE'),
]
