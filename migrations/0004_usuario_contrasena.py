# Generated by Django 5.0.2 on 2024-10-06 18:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curso', '0003_delete_curso'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuario',
            name='contrasena',
            field=models.CharField(default=123, max_length=15),
            preserve_default=False,
        ),
    ]