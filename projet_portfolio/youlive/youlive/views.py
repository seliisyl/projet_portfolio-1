# /mnt/c/Users/mende/projet_portfolio-1-1/projet_portfolio/youlive/youlive/views.py

import json
from django.shortcuts import render, redirect
from django.conf import settings
from authlib.integrations.django_client import OAuth
from django.urls import reverse
from urllib.parse import urlencode, quote_plus
from django.views.generic import View


# Initialize an OAuth object with the client_id and client_secret
oauth = OAuth()
oauth.register(
    'auth0',
    client_id=settings.AUTH0_CLIENT_ID,
    client_secret=settings.AUTH0_CLIENT_SECRET,
    client_kwargs={
        'scope': 'openid profile email',
    },
    server_metadata_url=f'https://{settings.AUTH0_DOMAIN}/.well-known/openid-configuration',
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
