from rest_framework import serializers
from .models import Usuario, Docente

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
