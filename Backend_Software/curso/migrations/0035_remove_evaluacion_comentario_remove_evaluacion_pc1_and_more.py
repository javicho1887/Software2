# Generated by Django 5.1.3 on 2024-11-24 23:29

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curso', '0034_evaluacion'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='evaluacion',
            name='comentario',
        ),
        migrations.RemoveField(
            model_name='evaluacion',
            name='pc1',
        ),
        migrations.RemoveField(
            model_name='evaluacion',
            name='pc2',
        ),
        migrations.RemoveField(
            model_name='evaluacion',
            name='pc3',
        ),
        migrations.RemoveField(
            model_name='evaluacion',
            name='pc4',
        ),
        migrations.AddField(
            model_name='evaluacion',
            name='curso',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='evaluaciones', to='curso.curso'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='evaluacion',
            name='fecha_creacion',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='evaluacion',
            name='pregunta1',
            field=models.CharField(default='Sin pregunta', max_length=255),
        ),
        migrations.AddField(
            model_name='evaluacion',
            name='pregunta2',
            field=models.CharField(default='Sin pregunta', max_length=255),
        ),
        migrations.AddField(
            model_name='evaluacion',
            name='pregunta3',
            field=models.CharField(default='Sin pregunta', max_length=255),
        ),
        migrations.AddField(
            model_name='evaluacion',
            name='visible',
            field=models.BooleanField(default=True),
        ),
        migrations.CreateModel(
            name='RespuestaEvaluacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pregunta_id', models.CharField(max_length=100)),
                ('respuesta', models.TextField()),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='curso.curso')),
                ('evaluacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='curso.evaluacion')),
            ],
        ),
    ]