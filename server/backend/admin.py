from django.contrib import admin
from .models import Brend, Products, Order, Stock, Video, Contacts, Category
# Register your models here.

@admin.register(Brend)
class BrendAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'parent']

@admin.register(Stock)
class StockAdmin(admin.ModelAdmin):
    list_display=['id', 'name']

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display=['id', 'name']

@admin.register(Contacts)
class ContactsAdmin(admin.ModelAdmin):
    list_display = ['id', 'full_name', 'email', 'thema']