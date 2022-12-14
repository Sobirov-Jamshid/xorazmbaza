# Generated by Django 4.1.1 on 2022-10-14 16:43

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_video_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='contacts',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='contacts',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
