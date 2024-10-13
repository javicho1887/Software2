import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import ExplorarCursos from './ExplorarCursos';
import MisCursos from './MisCursos';
import Mensajes from './Mensajes';
import MiPerfil from './MiPerfil';
import HistorialCursos from './HistorialCursos';
import Contactos from './Contactos';
import CambiarContraseña from './CambiarContraseña';
import CursoExcel from './CursoExcel';
import CursoPower from './CursoPower';
import CursoJava from './CursoJava';
import CursoPython from './CursoPython';
import CursoFigma from './CursoFigma';
import CursoTableau from './CursoTableau';
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
import CursoExcelAdmin from './CursoExcelAdmin';
import CursoPowerBiAdmin from './CursoPowerBiAdmin';
import CursoJavaAdmin from './CursoJavaAdmin';
import CursoPythonAdmin from './CursoPythonAdmin';
import CursoFigmaAdmin from './CursoFigmaAdmin';
import CursoTableauAdmin from './CursoTableauAdmin';
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
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/cambiar-contraseña" element={<CambiarContraseña />} />
          <Route path="/curso-excel" element={<CursoExcel />} />
          <Route path="/curso-powerbi" element={<CursoPower />} /> 
          <Route path="/curso-java" element={<CursoJava />} /> 
          <Route path="/curso-python" element={<CursoPython />} />
          <Route path="/curso-figma" element={<CursoFigma />} /> 
          <Route path="/curso-tableau" element={<CursoTableau />} />
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
          <Route path="/curso-excel-admin" element={<CursoExcelAdmin />} />
          <Route path="/curso-powerbi-admin" element={<CursoPowerBiAdmin />} />
          <Route path="/curso-java-admin" element={<CursoJavaAdmin />} />
          <Route path="/curso-python-admin" element={<CursoPythonAdmin />} />
          <Route path="/curso-figma-admin" element={<CursoFigmaAdmin />} />
          <Route path="/curso-tableau-admin" element={<CursoTableauAdmin />} />
          <Route path="/editar-modulo" element={<EditarModulo />} />
          <Route path="/agregar-modulo" element={<AgregarModulo />} />
          <Route path="/agregar-curso" element={<AgregarCurso />} />
          <Route path="/login-admin" element={<PaginaInicioAdmin />} />
          <Route path="/recuperar-contraseña" element={<RecuperarContraseña />} />
          <Route path="/recuperar-contraseña-admin" element={<RecuperarContraseñaAdmin />} />
          <Route path="/curso-detalle/:cursoId" element={<CursoDetalle />} />
          <Route path="/calificaciones-tableau" element={<CalificacionesTableau />} />
          <Route path="/nueva-contraseña" element={<NuevaContraseña />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
