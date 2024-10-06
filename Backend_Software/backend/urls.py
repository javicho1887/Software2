"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
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
