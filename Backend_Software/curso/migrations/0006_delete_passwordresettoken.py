# Generated by Django 5.1.1 on 2024-10-13 19:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('curso', '0005_passwordresettoken'),
    ]

    operations = [
        migrations.DeleteModel(
            name='PasswordResetToken',
        ),
    ]
