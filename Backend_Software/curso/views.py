from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.http import JsonResponse, HttpResponseNotAllowed
from django.contrib.auth import authenticate
from django.http import JsonResponse
from .models import Usuario, Docente, Matricula, Sesion
from .serializers import UsuarioSerializer, SesionSerializer, UsuarioRegistroSerializer, DocenteSerializer, DocenteRegistroSerializer, MatriculaSerializer, CursoSerializer, AsistenciaSerializer
from .models import Curso, Asistencia
from .models import Asesoria
from .serializers import AsesoriaSerializer



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

@api_view(['PUT'])
def actualizar_perfil(request, user_id):
    try:
        usuario = Usuario.objects.get(id=user_id)
        serializer = UsuarioSerializer(usuario, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Usuario.DoesNotExist:
        return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)
    

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
def actualizar_contraseña_docente(request):
    correo = request.data.get('correo')
    nueva_contraseña_docente = request.data.get('nueva_contraseña_docente')

    if not correo or not nueva_contraseña_docente:
        return Response({'error': 'Datos incompletos.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        docente = Docente.objects.get(correo=correo)
        docente.contraseña = nueva_contraseña_docente
        docente.save()
        return Response({'message': 'Contraseña actualizada con éxito.'}, status=status.HTTP_200_OK)
    except Docente.DoesNotExist:
        return Response({'error': 'Docente no encontrado.'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['POST'])
def validar_correo_docente(request):
    email = request.data.get('correo').strip()
    print(f"Correo recibido para validación: '{email}'")  # Asegúrate de ver el correo exacto que se está enviando
    if email and Docente.objects.filter(correo__iexact=email).exists():  # Búsqueda insensible a mayúsculas
        print("Correo encontrado en la base de datos.")
        return Response({'message': 'Correo encontrado'}, status=status.HTTP_200_OK)
    else:
        print(f"Correo '{email}' no encontrado en la base de datos.")
        return Response({'message': 'Correo no encontrado'}, status=status.HTTP_404_NOT_FOUND)

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
    correo = request.data.get('username')
    password = request.data.get('password')

    try:
        docente = Docente.objects.get(correo=correo)
        if docente.contraseña == password:
            # Incluir docente_id en la respuesta
            return JsonResponse({'success': True, 'docente_id': docente.id}, status=200)
        else:
            return JsonResponse({'error': 'Usuario o contraseña incorrectos.'}, status=400)
    except Docente.DoesNotExist:
        return JsonResponse({'error': 'Usuario no encontrado.'}, status=404)

@api_view(['GET'])
def docente_profile(request, docente_id):
    try:
        docente = Docente.objects.get(id=docente_id)
        serializer = DocenteSerializer(docente)
        return Response(serializer.data)
    except Docente.DoesNotExist:
        return Response({'error': 'Docente no encontrado'}, status=404)


# Cursos
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Matricula, Curso
from .serializers import CursoSerializer

@api_view(['GET'])
def cursos_usuario(request, user_id):
    """
    Obtiene todos los cursos en los que el usuario está matriculado.
    """
    try:
        # Obtener las matrículas del usuario
        matriculas = Matricula.objects.filter(usuario_id=user_id).select_related('curso')
        
        if not matriculas.exists():
            return Response({'error': 'El usuario no tiene matrículas en ningún curso'}, status=status.HTTP_404_NOT_FOUND)
        
        # Obtener los cursos únicos de esas matrículas
        cursos = [matricula.curso for matricula in matriculas]
        
        # Serializar los cursos
        cursos_data = []
        for curso in cursos:
            curso_data = CursoSerializer(curso).data
            # Agregar el campo `registrado`
            curso_data['registrado'] = True
            cursos_data.append(curso_data)
        
        return Response(cursos_data, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#  Sesiones

# Crear una nueva sesión
@api_view(['POST'])
def crear_sesion(request):
    serializer = SesionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Obtener todas las sesiones
@api_view(['GET'])
def lista_sesiones(request):
    sesiones = Sesion.objects.all()
    serializer = SesionSerializer(sesiones, many=True)
    return Response(serializer.data)

# Obtener detalles de una sesión específica
@api_view(['GET'])
def detalle_sesion(request, sesion_id):
    try:
        sesion = Sesion.objects.get(id=sesion_id)
        serializer = SesionSerializer(sesion)
        return Response(serializer.data)
    except Sesion.DoesNotExist:
        return Response({'error': 'Sesión no encontrada'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
def lista_sesiones_por_curso(request, curso_id):
    """
    Obtiene todas las sesiones de un curso específico e indica si el usuario está inscrito en cada una.
    """
    sesiones = Sesion.objects.filter(curso_id=curso_id)
    if not sesiones.exists():
        return Response({'error': 'No se encontraron sesiones para este curso'}, status=status.HTTP_404_NOT_FOUND)
    
    # Serializar las sesiones y agregar el campo 'inscrito' para cada una
    serializer = SesionSerializer(sesiones, many=True)
    sesiones_data = serializer.data

    return Response(sesiones_data, status=status.HTTP_200_OK)

@api_view(['GET'])
def lista_sesiones_por_curso_usuario(request, curso_id, user_id):
    """
    Obtiene todas las sesiones de un curso específico e indica si el usuario está inscrito en cada una.
    """
    sesiones = Sesion.objects.filter(curso_id=curso_id)
    if not sesiones.exists():
        return Response({'error': 'No se encontraron sesiones para este curso'}, status=status.HTTP_404_NOT_FOUND)
    
    # Obtener las sesiones en las que el usuario está inscrito
    matriculas_usuario = Matricula.objects.filter(usuario_id=user_id, sesion_id__in=sesiones.values_list('id', flat=True))
    sesiones_inscritas = set(matriculas_usuario.values_list('sesion_id', flat=True))
    
    # Serializar las sesiones y agregar el campo 'inscrito' para cada una
    serializer = SesionSerializer(sesiones, many=True)
    sesiones_data = serializer.data
    for sesion in sesiones_data:
        sesion['inscrito'] = sesion['id'] in sesiones_inscritas

    return Response(sesiones_data, status=status.HTTP_200_OK)

# Actualizar una sesión
@api_view(['PUT'])
def actualizar_sesion(request, sesion_id):
    try:
        sesion = Sesion.objects.get(id=sesion_id)
    except Sesion.DoesNotExist:
        return Response({'error': 'Sesión no encontrada'}, status=status.HTTP_404_NOT_FOUND)

    serializer = SesionSerializer(sesion, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Eliminar una sesión
@api_view(['DELETE'])
def eliminar_sesion(request, sesion_id):
    try:
        sesion = Sesion.objects.get(id=sesion_id)
        sesion.delete()
        return Response({'message': 'Sesión eliminada con éxito'}, status=status.HTTP_204_NO_CONTENT)
    except Sesion.DoesNotExist:
        return Response({'error': 'Sesión no encontrada'}, status=status.HTTP_404_NOT_FOUND)


# Crear una nueva matrícula
@api_view(['POST'])
def crear_matricula(request):
    """
    Crear una matrícula para un usuario y curso.
    """
    usuario_id = request.data.get('usuario')
    curso_id = request.data.get('curso')

    if Matricula.objects.filter(usuario_id=usuario_id, curso_id=curso_id).exists():
        return Response({'error': 'El usuario ya está registrado en este curso.'}, status=status.HTTP_400_BAD_REQUEST)

    serializer = MatriculaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Obtener todas las matrículas
@api_view(['GET'])
def lista_matriculas(request):
    matriculas = Matricula.objects.all()
    serializer = MatriculaSerializer(matriculas, many=True)
    return Response(serializer.data)

# Obtener detalles de una matrícula específica
@api_view(['GET'])
def detalle_matricula(request, matricula_id):
    try:
        matricula = Matricula.objects.get(id=matricula_id)
        serializer = MatriculaSerializer(matricula)
        return Response(serializer.data)
    except Matricula.DoesNotExist:
        return Response({'error': 'Matrícula no encontrada'}, status=status.HTTP_404_NOT_FOUND)

# Eliminar una matrícula
@api_view(['DELETE'])
def eliminar_matricula(request, matricula_id):
    try:
        matricula = Matricula.objects.get(id=matricula_id)
        matricula.delete()
        return Response({'message': 'Matrícula eliminada con éxito'}, status=status.HTTP_204_NO_CONTENT)
    except Matricula.DoesNotExist:
        return Response({'error': 'Matrícula no encontrada'}, status=status.HTTP_404_NOT_FOUND)
    
def listar_cursos(request):
    cursos = Curso.objects.all()
    data = [
        {
            "id": c.id,
            "title": c.title,
            "descripcion": c.descripcion,
            "fecha_inicio": c.fecha_inicio.strftime("%Y-%m-%d") if c.fecha_inicio else None,
            "fecha_fin": c.fecha_fin.strftime("%Y-%m-%d") if c.fecha_fin else None,
            "docente": c.docente.nombres if c.docente else "Sin docente",
        }
        for c in cursos
    ]
    return JsonResponse(data, safe=False)

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@api_view(['PUT'])
def actualizar_metodo_pago(request, user_id):
    try:
        usuario = Usuario.objects.get(id=user_id)  # Busca al usuario por ID
        metodo_pago = request.data.get('metodo_pago')  # Obtén el método de pago del cuerpo de la solicitud

        if metodo_pago not in ['transferencia', 'credito', 'debito']:
            return Response({'error': 'Método de pago inválido.'}, status=status.HTTP_400_BAD_REQUEST)

        usuario.metodo_pago = metodo_pago  # Actualiza el método de pago
        usuario.save()
        return Response({'message': 'Método de pago actualizado correctamente.'}, status=status.HTTP_200_OK)
    except Usuario.DoesNotExist:
        return Response({'error': 'Usuario no encontrado.'}, status=status.HTTP_404_NOT_FOUND)



@api_view(['GET'])
def asistencia_usuario(request, user_id, curso_id=None):
    """
    Obtiene las asistencias de un usuario.
    Si se proporciona `curso_id`, filtra por el curso específico.
    """
    try:
        # Filtro dinámico
        filtro = {'usuario_id': user_id}
        if curso_id:
            filtro['sesion__curso_id'] = curso_id

        asistencias = Asistencia.objects.filter(**filtro).select_related('sesion', 'sesion__curso', 'usuario')
        print(f"Filtro aplicado: {filtro}")  # Mensaje de depuración
        print(f"Registros encontrados: {asistencias.count()}")  # Cuántos registros se encontraron

        if not asistencias.exists():
            return Response(
                {'message': 'No se encontraron registros de asistencia para este usuario.'},
                status=status.HTTP_404_NOT_FOUND
            )

        asistencia_data = [
            {
                'curso': asistencia.sesion.curso.title,
                'sesion_fecha': asistencia.sesion.fecha.strftime('%Y-%m-%d %H:%M'),
                'usuario': asistencia.usuario.nombres,
                'presente': asistencia.presente,
                'fecha_registro': asistencia.fecha.strftime('%Y-%m-%d'),
            }
            for asistencia in asistencias
        ]
        return Response(asistencia_data, status=status.HTTP_200_OK)

    except Exception as e:
        print(f"Error: {str(e)}")  # Mensaje de depuración
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    
@api_view(['POST'])
def registrar_asistencia(request):
    usuario_id = request.data.get('usuario_id')
    sesion_id = request.data.get('sesion_id')
    presente = request.data.get('presente', False)

    try:
        usuario = Usuario.objects.get(id=usuario_id)
        sesion = Sesion.objects.get(id=sesion_id)

        # Crear o actualizar un registro de asistencia
        asistencia, created = Asistencia.objects.update_or_create(
            usuario=usuario,
            sesion=sesion,
            defaults={'presente': presente, 'fecha': sesion.fecha.date()}
        )
        message = 'Asistencia registrada correctamente' if created else 'Asistencia actualizada correctamente'
        return Response({'message': message}, status=status.HTTP_200_OK)
    except Usuario.DoesNotExist:
        return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)
    except Sesion.DoesNotExist:
        return Response({'error': 'Sesión no encontrada'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def obtener_asesorias(request, curso_id):
    asesorias = Asesoria.objects.filter(curso_id=curso_id)
    serializer = AsesoriaSerializer(asesorias, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def obtener_sesiones_curso(request, curso_id):
    try:
        sesiones = Sesion.objects.filter(curso_id=curso_id)
        serializer = SesionSerializer(sesiones, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Sesion.DoesNotExist:
        return Response({"error": "No se encontraron sesiones para este curso."}, status=status.HTTP_404_NOT_FOUND)

from .models import Sugerencia
from .serializers import SugerenciaSerializer

@api_view(['POST'])
def crear_sugerencia(request):
    serializer = SugerenciaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    print("Errores del serializer:", serializer.errors)  # Imprime los errores en la consola del servidor
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def listar_sugerencias_curso(request, curso_id):
    """
    Listar todas las sugerencias de un curso.
    """
    sugerencias = Sugerencia.objects.filter(curso_id=curso_id)
    serializer = SugerenciaSerializer(sugerencias, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

from .models import Encuesta
from .serializers import EncuestaSerializer

@api_view(['POST'])
def crear_encuesta(request):
    serializer = EncuestaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def listar_usuarios_curso(request, curso_id):
    """
    Lista los usuarios inscritos en un curso.
    """
    try:
        matriculas = Matricula.objects.filter(curso_id=curso_id).select_related('usuario')
        if not matriculas.exists():
            return Response({'error': 'No hay usuarios inscritos en este curso'}, status=status.HTTP_404_NOT_FOUND)
        
        usuarios = [matricula.usuario for matricula in matriculas]
        serializer = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


from .models import Documento

def listar_documentos(request, curso_id):
    documentos = Documento.objects.filter(curso_id=curso_id)  # Filtrar los documentos por curso_id
    documentos_data = [{"titulo": doc.titulo, "archivo": doc.archivo.url} for doc in documentos]  # Obtener los datos de los documentos

    if not documentos:
        return JsonResponse({"mensaje": "No se encontraron documentos para este curso."}, status=404)

    return JsonResponse(documentos_data, safe=False, status=200)

from rest_framework.views import APIView 
from .models import Actividad
from .serializers import ActividadSerializer
class ActividadView(APIView):
    def get(self, request, curso_id):
        try:
            actividades = Actividad.objects.filter(curso_id=curso_id)
            serializer = ActividadSerializer(actividades, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

from .models import Mensaje
from .serializers import MensajeSerializer

@api_view(['GET'])
def listar_mensajes_curso(request, curso_id):
    mensajes = Mensaje.objects.filter(curso_id=curso_id).select_related('curso')
    serializer = MensajeSerializer(mensajes, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def crear_mensaje(request):
    """
    Crea un nuevo mensaje.
    """
    serializer = MensajeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def obtener_curso(request, curso_id):
    """
    Obtener detalles de un curso específico.
    """
    try:
        curso = Curso.objects.get(id=curso_id)
        serializer = CursoSerializer(curso)
        return Response(serializer.data)
    except Curso.DoesNotExist:
        return Response({"error": "Curso no encontrado"}, status=404)
    
def listar_usuario(request):
    usuarios = Usuario.objects.all()
    data = [
        {
            "id": u.id,
            "nombres": u.nombres,
            "apellidos": u.apellidos,
            "dni": u.dni,
            "correo": u.correo,
            "dia":u.dia,
            "mes":u.mes,
            "ano":u.ano

        }
        for u in usuarios
    ]
    return JsonResponse(data, safe=False)
def listar_docente(request):
    docentes = Docente.objects.all()
    data = [
        {
            "id": d.id,
            "nombres": d.nombres,
            "apellidos": d.apellidos,
            "dni": d.dni,
            "correo": d.correo,
            "dia":d.dia,
            "mes":d.mes,
            "anio":d.anio

        }
        for d in docentes
    ]
    return JsonResponse(data, safe=False)

@api_view(['GET'])
def verificar_matricula(request):
    usuario_id = request.query_params.get('usuario')
    curso_id = request.query_params.get('curso')

    if not usuario_id or not curso_id:
        return Response({'error': 'Faltan parámetros usuario o curso.'}, status=status.HTTP_400_BAD_REQUEST)

    matricula = Matricula.objects.filter(usuario_id=usuario_id, curso_id=curso_id).first()
    if matricula:
        return Response({'matriculado': True}, status=status.HTTP_200_OK)

    return Response({'matriculado': False}, status=status.HTTP_200_OK)

from .models import Curso
from .serializers import CursoSerializer

@api_view(['GET'])
def cursos_por_docente(request, docente_id):
    cursos = Curso.objects.filter(docente_id=docente_id)
    if cursos.exists():
        serializer = CursoSerializer(cursos, many=True)
        return Response(serializer.data, status=200)
    return Response({'error': 'No se encontraron cursos para este docente.'}, status=404)


from .models import Documento
from .serializers import DocumentoSerializer
from rest_framework.parsers import MultiPartParser, FormParser
class DocumentoUploadView(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, curso_id):
        data = request.data
        data['curso'] = curso_id  # Asociar el documento al curso
        serializer = DocumentoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

from .serializers import ActividadSerializer, EvidenciaSerializer

@api_view(['POST'])
def crear_actividad(request):
    serializer = ActividadSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def actualizar_actividad(request, actividad_id):
    try:
        actividad = Actividad.objects.get(id=actividad_id)
        serializer = ActividadSerializer(actividad, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Actividad.DoesNotExist:
        return Response({'error': 'Actividad no encontrada'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['POST'])
def crear_evidencia(request):
    serializer = EvidenciaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def actualizar_usuario(request, pk):
    try:
        usuario = Usuario.objects.get(pk=pk)  # Busca al usuario por su ID
    except Usuario.DoesNotExist:
        return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)

    # Actualiza los datos del usuario
    serializer = UsuarioSerializer(usuario, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def actualizar_usuario_por_id(request, id):
    if request.method == 'PATCH':
        try:
            usuario = Usuario.objects.get(pk=id)
            data = json.loads(request.body)

            usuario.nombres = data.get('nombres', usuario.nombres)
            usuario.apellidos = data.get('apellidos', usuario.apellidos)
            usuario.save()

            return JsonResponse({'message': 'Usuario actualizado correctamente'}, status=200)
        except Usuario.DoesNotExist:
            return JsonResponse({'error': 'Usuario no encontrado'}, status=404)
    return JsonResponse({'error': 'Método no permitido'}, status=405)
from django.views.decorators.csrf import csrf_exempt
import json
@csrf_exempt
def actualizar_usuario(request, id):
    if request.method == 'PATCH':  # Permite actualización parcial
        try:
            usuario = Usuario.objects.get(pk=id)  # Busca el usuario por ID
            data = json.loads(request.body)

            # Actualiza los campos solo si están presentes en el request
            usuario.nombres = data.get('nombres', usuario.nombres)
            usuario.apellidos = data.get('apellidos', usuario.apellidos)
            usuario.save()

            return JsonResponse({
                'id': usuario.id,
                'nombres': usuario.nombres,
                'apellidos': usuario.apellidos
            }, status=200)
        except Usuario.DoesNotExist:
            return JsonResponse({'error': 'Usuario no encontrado'}, status=404)
    return JsonResponse({'error': 'Método no permitido'}, status=405)
@csrf_exempt
def actualizar_usuario(request, id):
    if request.method == 'PATCH':
        try:
            usuario = Usuario.objects.get(pk=id)
            data = json.loads(request.body)
            usuario.nombres = data.get('nombres', usuario.nombres)
            usuario.apellidos = data.get('apellidos', usuario.apellidos)
            usuario.save()

            return JsonResponse({
                'id': usuario.id,
                'nombres': usuario.nombres,
                'apellidos': usuario.apellidos,
            }, status=200)
        except Usuario.DoesNotExist:
            return JsonResponse({'error': 'Usuario no encontrado'}, status=404)
    return JsonResponse({'error': 'Método no permitido'}, status=405)

@csrf_exempt
def actualizar_docente(request, id):
    if request.method == 'PATCH':
        try:
            docente = Docente.objects.get(pk=id)
            data = json.loads(request.body)
            docente.nombres = data.get('nombres', docente.nombres)
            docente.apellidos = data.get('apellidos', docente.apellidos)
            docente.save()

            return JsonResponse({
                'id': docente.id,
                'nombres': docente.nombres,
                'apellidos': docente.apellidos,
            }, status=200)
        except Docente.DoesNotExist:
            return JsonResponse({'error': 'Docente no encontrado'}, status=404)
    return JsonResponse({'error': 'Método no permitido'}, status=405)

from django.contrib.auth.hashers import check_password
from rest_framework.decorators import api_view
from .models import Admin

@api_view(['POST'])
def loginAdmin(request):
    # Obtener datos del cuerpo de la solicitud
    correo = request.data.get('username')  # Campo del formulario
    password = request.data.get('password')  # Campo del formulario

    try:
        # Buscar el administrador por correo
        admin = Admin.objects.get(correo=correo)

        # Verificar la contraseña
        if admin.contraseña == password:  # Si las contraseñas no están cifradas
            return JsonResponse(
                {'message': 'Autenticación exitosa', 'Admin_id': admin.id},
                status=status.HTTP_200_OK
            )
        else:
            return JsonResponse(
                {'message': 'Contraseña incorrecta'},
                status=status.HTTP_401_UNAUTHORIZED
            )

    except Admin.DoesNotExist:
        # El administrador no existe
        return JsonResponse(
            {'message': 'Usuario no encontrado'},
            status=status.HTTP_401_UNAUTHORIZED
        )
    except Exception as e:
        # Manejar errores inesperados
        return JsonResponse(
            {'message': 'Error del servidor', 'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
