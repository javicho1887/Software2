from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Usuario
from .serializers import UsuarioSerializer
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .serializers import UsuarioRegistroSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import DocenteRegistroSerializer
from django.http import JsonResponse, HttpResponseNotAllowed
from django.contrib.auth import authenticate
from django.http import JsonResponse

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

@api_view(['POST'])
def actualizar_contraseña(request):
    email = request.data.get('email')
    new_password = request.data.get('newPassword')

    try:
        usuario = Usuario.objects.get(correo=email)
        usuario.contrasena = new_password  # Almacena la contraseña nueva en texto plano
        usuario.save()
        return Response({'message': 'Contraseña actualizada con éxito'}, status=status.HTTP_200_OK)
    except Usuario.DoesNotExist:
        return Response({'message': 'Correo no encontrado'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def validar_correo(request):
    email = request.data.get('correo').strip()
    print(f"Correo recibido para validación: '{email}'")  # Asegúrate de ver el correo exacto que se está enviando
    if email and Usuario.objects.filter(correo__iexact=email).exists():  # Búsqueda insensible a mayúsculas
        print("Correo encontrado en la base de datos.")
        return Response({'message': 'Correo encontrado'}, status=status.HTTP_200_OK)
    else:
        print(f"Correo '{email}' no encontrado en la base de datos.")
        return Response({'message': 'Correo no encontrado'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def actualizar_contraseña(request):
    correo = request.data.get('correo')
    nueva_contraseña = request.data.get('nueva_contraseña')

    if not correo or not nueva_contraseña:
        return Response({'error': 'Datos incompletos.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        usuario = Usuario.objects.get(correo=correo)
        usuario.contrasena = nueva_contraseña
        usuario.save()
        return Response({'message': 'Contraseña actualizada con éxito.'}, status=status.HTTP_200_OK)
    except Usuario.DoesNotExist:
        return Response({'error': 'Usuario no encontrado.'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def cambiar_contraseña(request):
    correo = request.data.get('correo')
    current_password = request.data.get('current_password')
    new_password = request.data.get('new_password')

    try:
        usuario = Usuario.objects.get(correo=correo)
        if usuario.contrasena != current_password:
            return Response({'error': 'La contraseña actual es incorrecta.'}, status=status.HTTP_400_BAD_REQUEST)

        usuario.contrasena = new_password
        usuario.save()
        return Response({'message': 'Contraseña actualizada con éxito.'}, status=status.HTTP_200_OK)
    except Usuario.DoesNotExist:
        return Response({'error': 'Usuario no encontrado.'}, status=status.HTTP_404_NOT_FOUND)
    
#parteDocente
@api_view(['POST'])
def registro_docente(request):
    if request.method == 'POST':
        # Lógica para manejar la solicitud POST
        print(request.data)  # Para depuración
        serializer = DocenteRegistroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'mensaje': 'Docente registrado correctamente'})
        else:
            print(serializer.errors)  # Muestra los errores
            return JsonResponse({'mensaje': 'Error al registrar. Verifica los datos.', 'errores': serializer.errors})
    else:
        # Respuesta para métodos no permitidos
        return HttpResponseNotAllowed(['POST'])

@api_view(['POST'])
def login_docente(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)  # Iniciar sesión
            return JsonResponse({'success': True}, status=200)
        else:
            return JsonResponse({'error': 'Usuario o contraseña incorrectos.'}, status=400)
    
    return JsonResponse({'error': 'Método no permitido'}, status=405)