from django.shortcuts import render

def login(request):
    return render(request, 'login.html')

def home(request):
    return render(request, 'home.html')

def add_user(request):
    return render(request, 'add_user.html')

def user_activity(request):
    return render(request, 'user_activity.html')

def bulk_upload(request):
    return render(request, 'bulk_upload.html')

def report(request):
    return render(request, 'report.html')

def bootstrap(request):
    return render(request, 'bootstrap.html')