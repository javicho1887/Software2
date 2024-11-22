import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HistorialCursos.css";

function HistorialCursos() {
  const [cursos, setCursos] = useState([
    {
      id: 1,
      nombre: "Figma",
      fecha: "05/10/2024",
      estado: "Completado", // Estado agregado
    },
    {
      id: 2,
      nombre: "Python",
      fecha: "05/10/2024",
      estado: "En curso", // Estado agregado
    },
  ]);

  // useEffect para hacer la solicitud a la API cuando el componente se cargue
  // useEffect(() => {
  //   fetch('http://localhost:8000/api/cursos/')  // Asegúrate de que la URL sea correcta
  //     .then((response) => response.json())
  //     .then((data) => setCursos(data))
  //     .catch((error) => console.error('Error al cargar los cursos:', error));
  // }, []);

  return (
    <div className="historial-cursos-container">
      <header className="historial-cursos-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/explorar-cursos" className="nav-button">
            Explorar Cursos
          </Link>
          <Link to="/mis-cursos" className="nav-button">
            Mis Cursos
          </Link>
          <Link to="/mensajes" className="nav-button">
            Mensajes
          </Link>
          <Link to="/mi-perfil">
            <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
          </Link>
        </nav>
      </header>

      <main className="historial-cursos-main">
        <aside className="perfil-sidebar">
          <div className="perfil-avatar">
            <img
              src="/user-avatar.png"
              alt="User Avatar"
              className="perfil-avatar-img"
            />
            <h2>Hola, User01!</h2>
          </div>
          <ul className="perfil-menu">
            <li>
              <a href="/mi-perfil">Mi Perfil</a>
            </li>
            <li>
              <a href="/historial-cursos" className="active">
                Historial de cursos
              </a>
            </li>
           
            <li>
              <a href="#">Cerrar Sesión</a>
            </li>
          </ul>
        </aside>

        <section className="historial-content">
          <h1>Mi Cuenta</h1>
          <div className="historial-details">
            <h2>Historial de Cursos</h2>
            <div className="historial-lista">
              {cursos.map((curso) => (
                <div key={curso.id} className="curso-card">
                  <p>
                    <strong>Curso:</strong> {curso.nombre}
                  </p>
                  <p>
                    <strong>Adquirido:</strong> {curso.fecha}
                  </p>
                  <p>
                    <strong>Estado:</strong> {curso.estado} {/* Muestra el estado aquí */}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HistorialCursos;
