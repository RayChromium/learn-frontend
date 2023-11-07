from django.http import HttpResponse
from django.shortcuts import render
from .models import CheatsheetPage

def cheatsheet(request):
    data = CheatsheetPage.objects.all()
    # the dict key must match the one in etmplates/cheatsheet/cheatsheet.html
    return render(request, 'cheatsheet/cheatsheet.html', {'cheatsheet': data} )

def home(request):
    return HttpResponse("Homepage")

def detail(request, id):
    data = CheatsheetPage.objects.get(pk=id)
    return render(request, 'cheatsheet/detail.html', {'cheatsheetpage': data})