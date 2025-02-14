# /mnt/c/Users/mende/projet_portfolio-1-1/projet_portfolio/youlive/youlive/views.py
import os
import json
import time
import random
from django.shortcuts import render, redirect
from django.conf import settings
from authlib.integrations.django_client import OAuth
from django.urls import reverse
from urllib.parse import urlencode, quote_plus
from django.views.generic import View
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from stream_chat import StreamChat
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Initialize an OAuth object with the client_id and client_secret
oauth = OAuth()
oauth.register(
    'auth0',
    client_id=os.getenv('AUTH0_CLIENT_ID'),
    client_secret=os.getenv('AUTH0_CLIENT_SECRET'),
    client_kwargs={
        'scope': 'openid profile email',
    },
    server_metadata_url=f'https://{os.getenv("AUTH0_DOMAIN")}/.well-known/openid-configuration',
)


class ReactAppView(View):
    def get(self, request):
        try:
            with open('/mnt/c/Users/mende/projet_portfolio-1-1/projet_portfolio/youlive/static/index.html') as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )

# create login view for Auth0
def auth_login(request):
    redirect_uri = request.build_absolute_uri(reverse("auth0_callback"))
    return oauth.auth0.authorize_redirect(request, redirect_uri)

# create callback view for Auth0
def auth_callback(request):
    token = oauth.auth0.authorize_access_token(request)
    user_info = token.get('userinfo')
    request.session["user"] = user_info
    # connectez l'utilisateur ou creez un compte utilisateur
    return redirect(reverse("index"))

# create logout view for Auth0
def auth0_logout(request):
    request.session.clear()
    return redirect(
        f"https://{settings.AUTH0_DOMAIN}/v2/logout?"
        + urlencode(
            {
                "returnTo": request.build_absolute_uri(reverse("index")),
                "client_id": settings.AUTH0_CLIENT_ID,
            },
            quote_via=quote_plus,
        ),
    )

# create views for template rendering
def index(request):
    return render(
        request,
        'main/index.html',
        context={
            "session": request.session.get("user"),
            "pretty": json.dumps(request.session.get("user"), indent=4),
        },
    )
def home(request):
    return HttpResponse("Bienvenue su rl'API Django !")

def contact(request):
    return render(request, 'main/contact.html')

def gallery(request):
    return render(request, 'main/gallery.html')

def events(request):
    return render(request, 'main/events.html')

def event_page(request):
    return render(request, 'main/eventPage.html')

def auth_event(request):
    return render(request, 'main/authEvent.html')

def services(request):
    return render(request, 'main/services.html')

def private_policy(request):
    return render(request, 'main/private_policy.html')

def terms_of_service(request):
    return render(request, 'main/terms_of_service.html')

# Initialisation du client GetStream
client = StreamChat(api_key=settings.STREAM_API_KEY, api_secret=settings.STREAM_API_SECRET)

def generate_guest_id():
    """Génère un identifiant unique pour un invité."""
    return 'guest_' + ''.join(random.choices(string.ascii_lowercase + string.digits, k=9))

@api_view(['POST'])
def get_token(request):
    """Génère un token pour un utilisateur ou un invité."""
    username = request.data.get('username')

    if username:
        user_id = username  # Utilisateur connecté
    else:
        user_id = generate_guest_id()  # Invité

    # Générer le token avec GetStream
    token = client.create_token(user_id)
    
    return Response({"userId": user_id, "token": token})