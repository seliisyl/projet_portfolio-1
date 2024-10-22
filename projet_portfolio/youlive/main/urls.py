from django.urls import path
from youlive.youlive import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contact/', views.contact, name='Contact - YOULIVE'),
    path('gallery/', views.gallery, name='Galerie - YOULIVE'),
    path('events/', views.events, name='Événements'),
    path('events/eventPage.html/', views.event_page, name='Détails de l\'Événement - YOULIVE'),
    path('eventPage/authEvent.html/', views.auth_event, name='Authentificationde l\'événement - YOULIVE'),
    path('services/', views.services, name='Prestations - YOULIVE'),
]
