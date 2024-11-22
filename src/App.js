import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import ExplorarCursos from './ExplorarCursos';
import MisCursos from './MisCursos';
import Mensajes from './Mensajes';
import MiPerfil from './MiPerfil';
import HistorialCursos from './HistorialCursos';
import AnunciosCursoDocente from './AnunciosCursoDocente';
import ContenidoCursoDocente from './ContenidoCursoDocente';
import CalificacionesCursoDocente from './CalificacionesCursoDocente';
import ZoomCursoDocente from './ZoomCursoDocente';
import MensajesCursoDocente from './MensajesCursoDocente';
import PaginaInicioDocente from './PaginaInicioDocente';
import MisCursosDocente from './MisCursosDocente';
import Register from './Register'; 
import './App.css';
import MisCursosAdmin from './MisCursosAdmin';
import MensajesAdmin from './MensajesAdmin';
import ExplorarCursosAdmin from './ExplorarCursosAdmin';
import MiPerfilAdmin from './MiPerfilAdmin';
import ListaProfesores from './ListaProfesores';
import ListaAlumnos from './ListaAlumnos';
import CambiarContraseñaAdmin from './CambiarContraseñaAdmin';
import EditarAdmin from './Editar';
import EditarModulo from './EditarModulo';
import AgregarModulo from './AgregarModulo';
import AgregarCurso from './AgregarCurso';
import PaginaInicioAdmin from './PaginaInicioAdmin';
import RecuperarContraseñaAdmin from './RecuperarContraseñaAdmin';
import RegistroDocente from './RegistroDocente';
import RecuperarContraseña from './RecuperarContraseña';
import CursoDetalle from "./CursoDetalle"; // Importar el nuevo componente
import CalificacionesTableau from './CalificacionesTableau';
import NuevaContraseña from './NuevaContraseña';
import MiPerfilDocente from './MiPerfilDocente';
import CambiarContraseñaDocente from './CambiarContraseñaDocente';
import ContactosDocente from './ContactosDocente';
import CursoDetalleRegistrado from './CursoDetalleRegistrado';
import Asistencia from "./Asistencia";
import Sugerencias from './Sugerencias';
import Encuesta from './Encuesta';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/explorar-cursos" element={<ExplorarCursos />} />
          <Route path="/mis-cursos" element={<MisCursos />} />
          <Route path="/mensajes" element={<Mensajes />} />
          <Route path="/mi-perfil" element={<MiPerfil />} />
          <Route path="/historial-cursos" element={<HistorialCursos />} />
          
          <Route path="/anuncios-curso-docente" element={<AnunciosCursoDocente />} />
          <Route path="/contenido-curso-docente" element={<ContenidoCursoDocente />} />
          <Route path="/calificaciones-curso-docente" element={<CalificacionesCursoDocente />} />
          <Route path="/zoom-curso-docente" element={<ZoomCursoDocente />} />
          <Route path="/mensajes-curso-docente" element={<MensajesCursoDocente />} />
          <Route path="/login-docente" element={<PaginaInicioDocente />} />
          <Route path="/mis-cursos-docente" element={<MisCursosDocente />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mis-cursos-admin" element={<MisCursosAdmin />} />
          <Route path="/mensajes-admin" element={<MensajesAdmin />} />
          <Route path="/explorar-cursos-admin" element={<ExplorarCursosAdmin />} />
          <Route path="/mi-perfil-admin" element={<MiPerfilAdmin />} />
          <Route path="/lista-profesores" element={<ListaProfesores />} />
          <Route path="/lista-alumnos" element={<ListaAlumnos />} />
          <Route path="/cambiar-contraseña-admin" element={<CambiarContraseñaAdmin />} />
          <Route path="/editar-admin" element={<EditarAdmin />} />
          <Route path="/registro-docente" element={<RegistroDocente />} />
 
          <Route path="/editar-modulo" element={<EditarModulo />} />
          <Route path="/agregar-modulo" element={<AgregarModulo />} />
          <Route path="/agregar-curso" element={<AgregarCurso />} />
          <Route path="/login-admin" element={<PaginaInicioAdmin />} />
          <Route path="/recuperar-contraseña" element={<RecuperarContraseña />} />
          <Route path="/recuperar-contraseña-admin" element={<RecuperarContraseñaAdmin />} />
          <Route path="/curso-detalle/:cursoId" element={<CursoDetalle />} />
          <Route path="/calificaciones-tableau" element={<CalificacionesTableau />} />
          <Route path="/nueva-contraseña" element={<NuevaContraseña />} />
          <Route path="/mi-perfil-docente" element={<MiPerfilDocente />} />
          <Route path="/cambiar-contraseña-docente" element={<CambiarContraseñaDocente />} />
          <Route path="/contactos-docente" element={<ContactosDocente />} />
          <Route path="/curso-registrado/:cursoId" element={<CursoDetalleRegistrado />} />
          <Route path="/ver-asistencia/:userId" element={<Asistencia />} />
          <Route path="/sugerencias/curso/:cursoId" element={<Sugerencias />} />
          <Route path="/encuesta/:cursoId" element={<Encuesta />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
