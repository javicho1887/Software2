# Generated by Django 4.2.16 on 2024-10-13 22:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('curso', '0007_docente'),
    ]

    operations = [
        migrations.RenameField(
            model_name='docente',
            old_name='ano',
            new_name='anio',
        ),
        migrations.RenameField(
            model_name='docente',
            old_name='contrasena',
            new_name='contraseña',
        ),
    ]
