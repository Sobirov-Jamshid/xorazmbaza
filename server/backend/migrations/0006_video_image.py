# Generated by Django 4.1.1 on 2022-10-14 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_alter_brend_image_alter_category_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='image',
            field=models.ImageField(default=1, upload_to='media/video'),
            preserve_default=False,
        ),
    ]