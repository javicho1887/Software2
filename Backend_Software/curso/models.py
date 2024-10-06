from django.db import models

class Usuario(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    dni = models.CharField(max_length=8)
    dia = models.IntegerField()
    mes = models.IntegerField()
    ano = models.IntegerField()
    correo = models.EmailField(unique=True)
    telefono = models.CharField(max_length=15)
    contrasena = models.CharField(max_length=15)
    def __str__(self):
        return f'{self.nombres} {self.apellidos}'
