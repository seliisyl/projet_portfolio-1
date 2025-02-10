from django.urls import path
from youlive.youlive.views import auth_login, auth_callback

urlpatterns = [
    path('login/', auth0_login, name='auth0_login'),
    path('callback/', auth0_callback, name='auth0_callback'),
    path('logout/', auth0_logout, name='auth0_logout'),
]
