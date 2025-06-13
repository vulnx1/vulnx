from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import Subscriber
from .serializers import SubscriberSerializer
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

def send_welcome_email(email):
    try:
        # Render the email template
        html_message = render_to_string('subscriptions/welcome_email.html', {
            'email': email
        })
        
        # Send the email
        send_mail(
            subject='Welcome to VulnX!',
            message='Thank you for subscribing to VulnX!',
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
            html_message=html_message,
            fail_silently=False,
        )
        logger.info(f"Welcome email sent to {email}")
        return True
    except Exception as e:
        logger.error(f"Failed to send welcome email to {email}: {str(e)}")
        return False

@api_view(['POST', 'OPTIONS'])
@permission_classes([AllowAny])
def subscribe(request):
    if request.method == 'OPTIONS':
        return Response(status=status.HTTP_200_OK)
        
    serializer = SubscriberSerializer(data=request.data)
    if serializer.is_valid():
        try:
            subscriber = serializer.save()
            # Send welcome email
            email_sent = send_welcome_email(subscriber.email)
            
            response_data = {
                'message': 'Successfully subscribed!',
                'email': subscriber.email,
                'welcome_email_sent': email_sent
            }
            
            return Response(response_data, status=status.HTTP_201_CREATED)
        except Exception as e:
            logger.error(f"Subscription error: {str(e)}")
            return Response(
                {'error': 'Email already subscribed'},
                status=status.HTTP_400_BAD_REQUEST
            )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
