# Generated by Django 4.1.1 on 2022-10-14 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='backend/category'),
        ),
    ]