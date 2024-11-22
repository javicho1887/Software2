# Generated by Django 4.2.16 on 2024-11-22 05:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('curso', '0020_remove_matricula_date_joined_remove_matricula_sesion_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sugerencia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('detalle', models.TextField()),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True)),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sugerencias', to='curso.curso')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sugerencias', to='curso.usuario')),
            ],
        ),
    ]
