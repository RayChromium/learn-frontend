from django.http import HttpResponse

def cheatsheet(request):
    return HttpResponse("hello, this is a cheatsheet")