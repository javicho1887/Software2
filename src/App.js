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
import './App.css';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
