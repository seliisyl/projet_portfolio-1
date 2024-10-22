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

def eventPage(request):
    return render(request, 'main/eventPage.html')

def authEvent(request):
    return render(request, 'main/authEvent.html')

def services(request):
    return render(request, 'main/services.html')
