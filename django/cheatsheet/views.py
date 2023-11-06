from django.http import HttpResponse
from django.shortcuts import render

def cheatsheet(request):
    return render(request, 'cheatsheet/cheatsheet.html', {'cheatsheet': ['wtf is model', 'wtf is view']})

def home(request):
    return HttpResponse("Homepage")