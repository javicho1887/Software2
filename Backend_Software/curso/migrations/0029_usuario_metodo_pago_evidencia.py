# Generated by Django 5.1.3 on 2024-11-23 22:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curso', '0028_delete_evidencia'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuario',
            name='metodo_pago',
            field=models.CharField(choices=[('transferencia', 'Transferencia Bancaria'), ('credito', 'Tarjeta de Crédito'), ('debito', 'Tarjeta de Débito')], default='transferencia', max_length=50),
        ),
        migrations.CreateModel(
            name='Evidencia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('archivo', models.ImageField(upload_to='evidencias/')),
                ('fecha_subida', models.DateTimeField(auto_now_add=True)),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='evidencias', to='curso.curso')),
                ('sesion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='evidencias', to='curso.sesion')),
            ],
        ),
    ]
