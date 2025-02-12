from django.urls import path
from youlive.youlive.views import auth_login, auth_callback, auth0_logout

urlpatterns = [
    path('login/', auth_login, name='auth_login'),
    path('callback/', auth_callback, name='auth_callback'),
    path('logout/', auth0_logout, name='auth0_logout'),
]
