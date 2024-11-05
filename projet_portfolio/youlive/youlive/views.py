# /mnt/c/Users/mende/projet_portfolio-1-1/projet_portfolio/youlive/youlive/views.py

from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')

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
