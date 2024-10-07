from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['nombres', 'apellidos', 'dni', 'dia', 'mes', 'ano', 'correo', 'telefono','contrasena' ]

class UsuarioRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['nombres', 'apellidos', 'dni', 'dia', 'mes', 'ano', 'correo', 'telefono', 'contrasena']
        extra_kwargs = {'contrasena': {'write_only': True}} 
