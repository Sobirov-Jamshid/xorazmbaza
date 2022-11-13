from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.index_view, name='index'),
    path('stock/', views.stock, name='stock'),
    path('stock/<int:pk>', views.stock_detail, name='stock-detail'),
    path('video/', views.video, name='video'),
    path('shipping/', views.shipping, name='shipping'),
    path('contact/', views.contact, name='contact'),
    path('service/', views.service_center, name='service'),
    path('feedback/', views.feedback, name='feedback'),
    path('money-club/', views.money_club, name='money-club'),
    path('address/', views.address, name='address'),
]