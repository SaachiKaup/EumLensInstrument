from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import get_connection, send_mail
import logging

logger = logging.getLogger(__name__)

def login(request):
    return render(request, 'login.html')

def add_user(request):
    return render(request, 'table.html')

def user_activity(request):
    return render(request, 'user_activity.html')

def mail(request):
    connection = get_connection()
    connection.open()
    send_mail(
        'Invitation to take the instrument.',
        'Practitioner invites you to take the EUM I instrument.',
        'eum.test.mails@gmail.com',
        ['saachi.kaup@gmail.com', 'aarushigulati07@gmail.com', 'ishaatteri@gmail.com', 'saumyachat03@gmail.com'],
        fail_silently=False
    )
    connection.close()
    return HttpResponse("Sent.")

