from django.contrib import admin
from .models import Usuario, Docente, Curso, Sesion, Matricula, Asistencia, Sugerencia,Encuesta,Documento,Actividad, Mensaje, Evidencia,Admin, Evaluacion 

class CursoAdmin(admin.ModelAdmin):
    exclude = ('usuarios_registrados',)  # Excluir el campo editable
    list_display = ('title', 'fecha_inicio', 'fecha_fin', 'docente')
    readonly_fields = ('usuarios_inscritos',)  # Campo solo de lectura

    def usuarios_inscritos(self, obj):
        """Lista de usuarios inscritos a través de la tabla Matricula"""
        return ", ".join([f"{m.usuario.nombres} {m.usuario.apellidos}" for m in Matricula.objects.filter(curso=obj)])

    usuarios_inscritos.short_description = "Usuarios Inscritos"

class SesionAdmin(admin.ModelAdmin):
    list_display = ('curso', 'fecha', 'docente', 'duracion')
    list_filter = ('curso', 'fecha', 'docente')
    search_fields = ('curso__title', 'docente__nombres', 'docente__apellidos')

# Admin para Asistencia (Relación Usuario-Sesión)
class AsistenciaAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'sesion', 'presente', 'fecha')
    list_filter = ('usuario', 'sesion__curso', 'presente', 'fecha')
    search_fields = ('usuario__nombres', 'usuario__apellidos', 'sesion__curso__title')

from .models import Asesoria  # Importa el modelo de Asesorías

@admin.register(Asesoria)
class AsesoriaAdmin(admin.ModelAdmin):
    list_display = ('curso', 'fecha')  # Muestra las columnas de curso y fecha
    list_filter = ('curso',)  # Agrega filtro por curso
    search_fields = ('curso__title',)  # Habilita búsqueda por título del curso
    ordering = ('fecha',)  # Ordena por fecha de manera ascendente

    def has_change_permission(self, request, obj=None):
        return False  # Hace que los registros sean solo de lectura

admin.site.register(Curso, CursoAdmin)
admin.site.register(Usuario)
admin.site.register(Docente)
admin.site.register(Sesion)
admin.site.register(Matricula)
admin.site.register(Asistencia)
admin.site.register(Sugerencia)
admin.site.register(Documento)
admin.site.register(Actividad)
admin.site.register(Mensaje)
admin.site.register(Evidencia)
admin.site.register(Admin)

@admin.register(Encuesta)
class EncuestaAdmin(admin.ModelAdmin):
    list_display = ( 'curso', 'fecha_creacion')  # Campos que deseas mostrar
    list_filter = ('curso', 'fecha_creacion')  # Opcional: Filtrar por curso y fecha
    search_fields = ('mensaje',)  # Opcional: Habilitar búsqueda por mensaje

@admin.register(Evaluacion)
class EvaluacionAdmin(admin.ModelAdmin):
    list_display = ('curso', 'pregunta1', 'pregunta2', 'pregunta3', 'fecha_creacion', 'visible')
    search_fields = ('curso__nombre', 'pregunta1', 'pregunta2', 'pregunta3')
    list_filter = ('fecha_creacion', 'visible')
