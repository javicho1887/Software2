from django.urls import path
from .views import registro_usuario
from .views import login_usuario
from . import views
from .views import actualizar_contraseña
from .views import validar_correo
from .views import cambiar_contraseña
from .views import registro_docente
from .views import login_docente
from .views import docente_profile

urlpatterns = [
    path('registro/', registro_usuario, name='registro_usuario'),  # Solo mantienes el registro de usuario
    path('login/', login_usuario, name='login_usuario'),
    path('user-profile/<int:user_id>/', views.user_profile, name='user-profile'),
    path('actualizar-contraseña/', actualizar_contraseña, name='actualizar_contraseña'),
    path('validar-correo/', validar_correo, name='validar_correo'),
    path('cambiar-contraseña/', cambiar_contraseña, name='cambiar_contraseña'),
    
    # Rutas para Docente
    path('docentes/registro/', registro_docente, name='registro_docente'),
    path('login/docente/', login_docente, name='login_docente'),
    path('docente-profile/<int:docente_id>/', views.docente_profile, name='docente-profile'),

    # Rutas para cursos
    path('cursos/usuario/<int:user_id>/', views.cursos_usuario, name='cursos_usuario'),

    # Rutas para sesiones
    path('sesiones/', views.lista_sesiones, name='lista_sesiones'),  # Obtener todas las sesiones
    path('sesiones/<int:sesion_id>/', views.detalle_sesion, name='detalle_sesion'),  # Obtener detalle de una sesión
    path('sesiones/curso/<int:curso_id>/', views.lista_sesiones_por_curso, name='lista_sesiones_por_curso'),
    path('sesiones/curso/<int:curso_id>/usuario/<int:user_id>/', views.lista_sesiones_por_curso_usuario, name='lista_sesiones_por_curso'),
    path('sesiones/crear/', views.crear_sesion, name='crear_sesion'),  # Crear una nueva sesión
    path('sesiones/<int:sesion_id>/actualizar/', views.actualizar_sesion, name='actualizar_sesion'),  # Actualizar una sesión
    path('sesiones/<int:sesion_id>/eliminar/', views.eliminar_sesion, name='eliminar_sesion'),  # Eliminar una sesión


    # Rutas matrícula
    path('matriculas/', views.lista_matriculas, name='lista_matriculas'),
    path('matriculas/crear/', views.crear_matricula, name='crear_matricula'),
    path('matriculas/<int:matricula_id>/', views.detalle_matricula, name='detalle_matricula'),
    path('matriculas/<int:matricula_id>/eliminar/', views.eliminar_matricula, name='eliminar_matricula'),

]

# Creando curso con un docente
# INSERT INTO curso_curso (title, descripcion, fecha, costo, docente_id)
# VALUES ('Excel', 'curso sobre excel avanzado', '2024-11-15 09:00:00', 150.50, 4);

# Creando un alumno
# INSERT INTO curso_usuario (nombres, apellidos, dni, dia, mes, ano, correo, telefono, contrasena)
# VALUES ('Patito', 'Lord', '12345678', 15, 5, 1990, 'patito.lord@gmail.com', '123456789', '1234');
