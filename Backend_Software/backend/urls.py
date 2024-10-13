
from django.contrib import admin  
from django.urls import path, include
from django.http import HttpResponse

# Vista para la página principal
def home_view(request):
    return HttpResponse("Bienvenido a la página principal del backend")

urlpatterns = [
    path('admin/', admin.site.urls),  # Esta es la línea que causaba el error
    path('api/', include('curso.urls')),  # Incluir las rutas de la API de cursos
    path('', home_view),  # Vista para la página raíz
]
