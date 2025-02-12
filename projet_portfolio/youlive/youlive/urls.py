"""
URL configuration for youlive project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import ReactAppView, get_stream_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', ReactAppView.as_view(), name='react_app'), # Inclure les URLs de l'application main
    path('auth/', include('youlive.auth.urls')), # Inclure les URLs pour l'authentification
    path('api/get-token/', get_stream_token, name='get_token'), # Ajouter l'URLs pour generer des tokens GetStream
]

# Ajouter les URLs des fichiers statiques en mode developpement
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    