from django.urls import path
from youlive.youlive import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contact/', views.contact, name='Contact - YOULIVE'),
    path('gallery/', views.gallery, name='Galerie - YOULIVE'),
]
