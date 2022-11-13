from django.db import models
from mptt.models import MPTTModel, TreeForeignKey
# Create your models here.
class Brend(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='media/images')

    created_data = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class Category(MPTTModel):
    name = models.CharField(max_length=100, verbose_name='Nomi')
    parent = TreeForeignKey(
        "self",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name='children',
        verbose_name='Ota kategoriya',
    )
    image = models.ImageField(upload_to='media/category', blank=True, null=True)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


    class Meta:
        verbose_name = 'Kategoriya'
        verbose_name_plural = verbose_name + 'lar'

    def __str__(self):
        return self.name

class Products(models.Model):
    category = models.ForeignKey(Brend, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='media/products')
    price = models.CharField(max_length=200)

class Order(models.Model):
    product = models.ForeignKey(Products, on_delete=models.SET_NULL, null=True)
    user_phone = models.CharField(max_length=15)
    user_address = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.product} - {self.user_phone}'


class Stock(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='media/aksiya')

    def __str__(self):
        return self.name

class Video(models.Model):
    name = models.CharField(max_length=200)
    video_url = models.URLField(max_length=200)
    image = models.ImageField(upload_to='media/video')
    video = models.FileField(upload_to='media/video', blank=True, null=True)

    def __str__(self):
        return self.name

class Contacts(models.Model):
    full_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    thema = models.CharField(max_length=50)
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.full_name
    

class Taxi_Tarif(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='media/tarif')
    price = models.TextField(max_length=50)

    def __str__(self) -> str:
        return self.name
