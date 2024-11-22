
from django.contrib import admin  
from django.urls import path, include
from django.http import HttpResponse
from django.conf import settings
from django.conf.urls.static import static

# Vista para la página principal
def home_view(request):
    return HttpResponse("Bienvenido a la página principal del backend")

urlpatterns = [
    path('admin/', admin.site.urls),  # Esta es la línea que causaba el error
    path('api/', include('curso.urls')),  # Incluir las rutas de la API de cursos
    path('', home_view),  # Vista para la página raíz
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
