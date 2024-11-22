# Generated by Django 4.2.16 on 2024-11-22 02:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('curso', '0016_sesion_duracion'),
    ]

    operations = [
        migrations.CreateModel(
            name='Asesoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField()),
                ('link', models.URLField(blank=True, max_length=500, null=True)),
                ('descripcion', models.TextField(blank=True, null=True)),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='asesorias', to='curso.curso')),
            ],
        ),
    ]