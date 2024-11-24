from rest_framework import serializers
from .models import Usuario, Docente, Matricula, Sesion, Curso, Asistencia,Asesoria,Admin
from .models import Sugerencia, Encuesta, Mensaje 


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
    docente = DocenteSerializer()  # Si es necesario incluir información del docente

    class Meta:
        model = Curso
        fields = '__all__'  # Esto incluirá el campo `visible`


class SesionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sesion
        fields = '__all__'

class MatriculaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Matricula
        fields = '__all__'

class AsistenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asistencia
        fields = '__all__'



class AsesoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asesoria
        fields = ['id', 'fecha', 'curso']

class SugerenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sugerencia
        fields = ['id', 'curso', 'detalle', 'fecha_creacion', 'visible']

class EncuestaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Encuesta
        fields = ['id', 'curso', 'pregunta1', 'pregunta2', 'pregunta3', 'fecha_creacion', 'visible']


from .models import Actividad

class ActividadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actividad
        fields = ['id', 'curso', 'nombre', 'descripcion', 'fecha_vencimiento']

class MensajeSerializer(serializers.ModelSerializer):
    curso_nombre = serializers.CharField(source='curso.title', read_only=True)  # Cambiado a 'curso.title'

    class Meta:
        model = Mensaje
        fields = ['id', 'usuario', 'curso', 'curso_nombre', 'contenido', 'fecha_envio']


from .models import Documento,Evidencia

class DocumentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Documento
        fields = ['id', 'curso', 'titulo', 'archivo', 'fecha_subida']

class EvidenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evidencia
        fields = ['id', 'curso', 'sesion', 'archivo', 'fecha_subida']

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ['nombres', 'apellidos', 'contraseña', 'correo', ]
        