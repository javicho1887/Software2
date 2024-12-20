from django.db import models

class Usuario(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    dni = models.CharField(max_length=8)
    dia = models.IntegerField()
    mes = models.IntegerField()
    ano = models.IntegerField()
    correo = models.EmailField(unique=True)
    telefono = models.CharField(max_length=15)
    contrasena = models.CharField(max_length=15)
    metodo_pago = models.CharField(
        max_length=50, 
        choices=[
            ('transferencia', 'Transferencia Bancaria'),
            ('credito', 'Tarjeta de Crédito'),
            ('debito', 'Tarjeta de Débito')
        ],
        default='transferencia'
    )  # Nuevo campo para el método de pago
    
    def __str__(self):
        return f'{self.nombres} {self.apellidos}'

class Docente(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    dni = models.CharField(max_length=8)
    dia = models.IntegerField()
    mes = models.IntegerField()
    anio = models.IntegerField()
    correo = models.EmailField(unique=True)
    telefono = models.CharField(max_length=15)
    contraseña = models.CharField(max_length=15)

    def __str__(self):
        return f'{self.nombres} {self.apellidos}'


class Curso(models.Model):
    title = models.CharField(max_length=100)  
    descripcion = models.TextField() 
    fecha_inicio = models.DateField(null=True, blank=True)
    fecha_fin = models.DateField(null=True, blank=True)
    docente = models.ForeignKey('Docente', on_delete=models.CASCADE, null=True, blank=True)
    usuarios_registrados = models.ManyToManyField('Usuario', blank=True)
    visible = models.BooleanField(default=True)  # Nuevo campo para visibilidad

    def __str__(self):
        return f'{self.title} ({self.fecha_inicio} - {self.fecha_fin})'

    
   
    
class Sesion(models.Model):
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)  # Relación con Curso
    fecha = models.DateTimeField()  # Fecha y hora de la sesión
    docente = models.ForeignKey(Docente, on_delete=models.CASCADE)  # Relación con Docente
    duracion = models.IntegerField(default=60)  # Duración de la sesión en minutos (opcional)

    def __str__(self):
        # Personaliza el texto para mostrar el curso y la fecha
        return f"{self.curso.title} - {self.fecha.strftime('%Y-%m-%d %H:%M')}"

class Matricula(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE, null=True, blank=True)
    fecha_matricula = models.DateField(auto_now_add=True, null=True)

    def __str__(self):
        return f"Matricula de {self.usuario.nombres} en {self.curso.title}"

class Asistencia(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)  # Relación con el alumno
    sesion = models.ForeignKey(Sesion, on_delete=models.CASCADE)  # Relación con la sesión del curso
    presente = models.BooleanField(default=False)  # Indica si el alumno asistió
    fecha = models.DateField(auto_now_add=True)  # Fecha del registro de asistencia

    def __str__(self):
        # Muestra información legible sobre la asistencia
        return f"Asistencia de {self.usuario.nombres} en {self.sesion.curso.title} - {self.sesion.fecha.strftime('%Y-%m-%d %H:%M')} ({'Presente' if self.presente else 'Ausente'})"


class Asesoria(models.Model):
    curso = models.ForeignKey('Curso', on_delete=models.CASCADE, related_name='asesorias')
    fecha = models.DateTimeField()

    def __str__(self):
        return f"Asesoría para {self.curso.title} - {self.fecha}"
    
class Sugerencia(models.Model):
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE, related_name='sugerencias')
    detalle = models.TextField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    visible = models.BooleanField(default=True)  # Controla si la sugerencia es visible

    def __str__(self):
        return f"Sugerencia para {self.curso.title}: {self.detalle[:50]}"

    
class Encuesta(models.Model):
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE, related_name='encuestas')
    pregunta1 = models.IntegerField()
    pregunta2 = models.CharField(max_length=10)
    pregunta3 = models.TextField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    visible = models.BooleanField(default=True)  # Controla si la encuesta es visible

    def __str__(self):
        return f"Encuesta para {self.curso.title}"


    @property
    def mensaje(self):
        return f"Preguntas: {self.pregunta1}, {self.pregunta2}, {self.pregunta3}"
    


class Documento(models.Model):
    curso = models.ForeignKey('Curso', on_delete=models.CASCADE, related_name='documentos')
    titulo = models.CharField(max_length=255)
    archivo = models.FileField(upload_to='documentos/')  # Campo para almacenar archivos
    fecha_subida = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
    

class Actividad(models.Model):
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE, related_name="actividades")
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    fecha_vencimiento = models.DateField()

    def __str__(self):
        return f'{self.nombre} - {self.curso.title}'
    

class Mensaje(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='mensajes')  # Relación con Usuario
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE, related_name='mensajes')  # Relación con Curso
    contenido = models.TextField()  # Contenido del mensaje
    fecha_envio = models.DateTimeField(auto_now_add=True)  # Fecha y hora de envío del mensaje

    def __str__(self):
     return f"Mensaje de {self.usuario.nombres} en {self.curso.title}"
    
class Evidencia(models.Model):
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE, related_name='evidencias')  # Relación con Curso
    sesion = models.ForeignKey(Sesion, on_delete=models.CASCADE, related_name='evidencias')  # Relación con Sesión
    archivo = models.ImageField(upload_to='evidencias/')  # Archivo de imagen
    fecha_subida = models.DateTimeField(auto_now_add=True)  # Fecha de subida

    def __str__(self):
        return f"Evidencia para {self.sesion.curso.title} - Sesión {self.sesion.id}"

class Admin(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    correo = models.EmailField(unique=True) 
    contraseña = models.CharField(max_length=15)
    def __str__(self):
        return f'{self.nombres} {self.apellidos}'


class RespuestaEvaluacion(models.Model):
    curso = models.ForeignKey('Curso', on_delete=models.CASCADE)
    evaluacion = models.ForeignKey('Evaluacion', on_delete=models.CASCADE)
    pregunta_id = models.CharField(max_length=100)
    respuesta = models.TextField()

    def __str__(self):
        return f"Respuesta {self.pregunta_id} para el curso {self.curso} y evaluación {self.evaluacion}"
    
class Evaluacion(models.Model):
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE, related_name='evaluaciones')
    pregunta1 = models.CharField(max_length=255)
    pregunta2 = models.CharField(max_length=255)
    pregunta3 = models.CharField(max_length=255)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    visible = models.BooleanField(default=True)

