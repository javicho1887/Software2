from rest_framework import serializers
from .models import Usuario, Docente, Matricula, Sesion, Curso

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['nombres', 'apellidos', 'dni', 'dia', 'mes', 'ano', 'correo', 'telefono']

class UsuarioRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['nombres', 'apellidos', 'dni', 'dia', 'mes', 'ano', 'correo', 'telefono', 'contrasena']
        extra_kwargs = {'contrasena': {'write_only': True}}

class DocenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Docente
        fields = ['nombres', 'apellidos', 'dni', 'dia', 'mes', 'anio', 'correo', 'telefono']

class DocenteRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Docente
        fields = ['nombres', 'apellidos', 'dni', 'dia', 'mes', 'anio', 'correo', 'telefono', 'contraseña']
        extra_kwargs = {'contrasena': {'write_only': True}}

class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'

class SesionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sesion
        fields = '__all__'

class MatriculaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Matricula
        fields = '__all__'