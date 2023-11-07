from django.http import HttpResponse
from django.shortcuts import render

data = {
    'cheatsheet': [
        'wtf is model', 
        'wtf is view',
        {
            'id': 5,
            'name': 'wert',
            'time': 2023
        },
        {
            'id': 1,
            'name': 'qwer',
            'time': 2012
        },
        {
            'id': 4,
            'name': 'asdf',
            'time': 1999
        }
        ]
    }

def cheatsheet(request):
    return render(request, 'cheatsheet/cheatsheet.html', data )

def home(request):
    return HttpResponse("Homepage")