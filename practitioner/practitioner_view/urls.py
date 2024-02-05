from django.contrib import admin
from django.urls import path, re_path
from . import views
from django.views.generic import RedirectView

urlpatterns = [
    path('login/', views.login, name='login'),
    path('add_user/', views.add_user, name='add_user'),
    path('user_activity/', views.user_activity, name='user_activity'),
    path('mail/', views.mail),
]