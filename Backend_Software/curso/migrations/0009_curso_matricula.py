# Generated by Django 5.1.2 on 2024-11-04 20:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curso', '0008_rename_ano_docente_anio_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Curso',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('descripcion', models.CharField(max_length=200)),
                ('fecha', models.DateTimeField()),
                ('costo', models.FloatField()),
                ('docente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='curso.docente')),
            ],
        ),
        migrations.CreateModel(
            name='Matricula',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_joined', models.DateField()),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='curso.curso')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='curso.usuario')),
            ],
        ),
    ]
