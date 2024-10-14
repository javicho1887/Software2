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
]

