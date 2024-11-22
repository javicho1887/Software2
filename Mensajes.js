import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Mensajes.css";
import { Link } from "react-router-dom";

function Mensajes() {
  const [mensajes, setMensajes] = useState([]);
  const cursoId = 4; // ID del curso, ajusta esto según sea necesario.

  // Fetch de los mensajes
  useEffect(() => {
    const fetchMensajes = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/mensajes/curso/${cursoId}/`);
        setMensajes(response.data);
      } catch (error) {
        console.error("Error al cargar los mensajes:", error);
      }
    };

    fetchMensajes();
  }, [cursoId]);

  return (
    <div className="mensajes-container">
      {/* Navegador superior */}
      <header className="mensajes-header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav className="nav-bar">
        <Link to="/explorar-cursos" className="nav-button">
            Explorar Cursos
          </Link>
        
          <Link to="/mis-cursos" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes" className="nav-button">Mensajes</Link>
          <Link to="/mi-perfil">
            <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
          </Link>
          </nav>
      </header>

      {/* Contenido principal */}
      <main className="mensajes-main">
        <h1>Mensajes</h1>
        <div className="mensajes-lista">
          {mensajes.length > 0 ? (
            mensajes.map((mensaje) => (
              <div key={mensaje.id} className="mensaje-card">
                <img src="/user-avatar.png" alt="Avatar" className="mensaje-avatar" />
                <div className="mensaje-info">
                  <p>{mensaje.contenido}</p>
                  <span className="mensaje-curso">Curso: {mensaje.curso_nombre}</span>
                  <span>{new Date(mensaje.fecha_envio).toLocaleDateString()}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No hay mensajes para este curso.</p>
          )}
        </div>
      </main>

      {/* Pie de página */}
      <footer className="mensajes-footer">
        <a href="#" className="help-link">¿Necesita ayuda?</a>
      </footer>
    </div>
  );
}

export default Mensajes;
