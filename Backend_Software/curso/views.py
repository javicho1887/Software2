from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Usuario
from .serializers import UsuarioSerializer
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .serializers import UsuarioRegistroSerializer



@api_view(['POST'])
def registro_usuario(request):
    if request.method == 'POST':
        serializer = UsuarioRegistroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_usuario(request):
    # Obtener correo y contraseña del cuerpo de la solicitud
    correo = request.data.get('username')  # El campo 'username' será el correo
    password = request.data.get('password')  # El campo 'password'

    try:
        # Buscar al usuario por su correo
        user = Usuario.objects.get(correo=correo)
        
        # Verificar si la contraseña proporcionada coincide
        if user.contrasena == password:
            # Si la contraseña coincide, autenticación exitosa
            return Response({'message': 'Autenticación exitosa', 'user_id': user.id}, status=status.HTTP_200_OK)
        else:
            # Contraseña incorrecta
            return Response({'message': 'Contraseña incorrecta'}, status=status.HTTP_401_UNAUTHORIZED)
    
    except Usuario.DoesNotExist:
        # El usuario con ese correo no existe
        return Response({'message': 'Usuario no encontrado'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
def user_profile(request, user_id):
    try:
        usuario = Usuario.objects.get(id=user_id)
        serializer = UsuarioSerializer(usuario)
        return Response(serializer.data)
    except Usuario.DoesNotExist:
        return Response({'error': 'Usuario no encontrado'}, status=404)