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

class Docente(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    dni = models.CharField(max_length=8)
    dia = models.IntegerField()
    mes = models.IntegerField()
    anio = models.IntegerField()
    correo = models.EmailField(unique=True)
    telefono = models.CharField(max_length=15)
    contraseña = models.CharField(max_length=15)

    def __str__(self):
        return f'{self.nombres} {self.apellidos}'

class Curso(models.Model):
    title = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=200)
    fecha = models.DateTimeField()
    costo = models.FloatField()
    docente = models.ForeignKey(Docente, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title} {self.fecha}'

class Matricula(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    date_joined = models.DateField(auto_now_add=True)