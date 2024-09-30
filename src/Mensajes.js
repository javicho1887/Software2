import React from 'react';
import './Mensajes.css';
import { Link } from 'react-router-dom';


function Mensajes() {
  const mensajes = [
    {
      id: 1,
      avatar: '/user1.jpg',
      mensaje: 'Estimado alumno, la solución al problema planteado es...',
      fecha: '10/09/2024',
      curso: 'Python',
    },
    {
      id: 2,
      avatar: '/user1.jpg',
      mensaje: 'Estimado alumno, la solución al problema planteado es...',
      fecha: '10/09/2024',
      curso: 'Figma',
    },
    {
      id: 3,
      avatar: '/user1.jpg',
      mensaje: 'Estimado alumno, la solución al problema planteado es...',
      fecha: '10/09/2024',
      curso: 'Figma2',
    },
    {
      id: 4,
      avatar: '/user1.jpg',
      mensaje: 'Estimado alumno, la solución al problema planteado es...',
      fecha: '10/09/2024',
      curso: 'Java',
    },
  ];

  return (
    <div className="mensajes-container">
      <header className="mensajes-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/explorar-cursos" className="nav-button">Explorar Cursos</Link>
          <Link to="/mis-cursos" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes" className="nav-button active">Mensajes</Link>
        </nav>
      </header>

      <main className="mensajes-main">
        <h1>Mensajes</h1>
        <div className="mensajes-lista">
          {mensajes.map((mensaje) => (
            <div key={mensaje.id} className="mensaje-card">
              <img src={mensaje.avatar} alt={`Avatar ${mensaje.curso}`} className="mensaje-avatar" />
              <div className="mensaje-info">
                <p>{mensaje.mensaje}</p>
                <span>{mensaje.fecha}</span>
                <span className="mensaje-curso">Curso: {mensaje.curso}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mensajes-footer">
        <a href="/help" className="help-link">¿Necesita ayuda?</a>
      </footer>
    </div>
  );
}

export default Mensajes;
