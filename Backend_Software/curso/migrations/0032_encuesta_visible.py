# Generated by Django 5.1.3 on 2024-11-24 00:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curso', '0031_sugerencia_visible'),
    ]

    operations = [
        migrations.AddField(
            model_name='encuesta',
            name='visible',
            field=models.BooleanField(default=True),
        ),
    ]