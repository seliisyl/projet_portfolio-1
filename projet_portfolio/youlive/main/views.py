# /mnt/c/Users/mende/projet_portfolio-1-1/projet_portfolio/youlive/youlive/views.py

from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')
