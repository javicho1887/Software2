import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ListaProfesores.css'; 

function ListaAlumnos() {
  const navigate = useNavigate();

  const alumnos = [
    { id: 1, nombre: 'Alumno 1', fecha: '20/09/2024' },
    { id: 2, nombre: 'Alumno 2', fecha: '21/09/2024' },
    { id: 3, nombre: 'Alumno 3', fecha: '22/09/2024' },
    { id: 4, nombre: 'Alumno 4', fecha: '23/09/2024' },
  ];

  const handleEditClick = (alumnoId) => {
    navigate(`/editar-admin/`);
  };

  return (
    <div className="historial-cursos-container">
      <header className="historial-cursos-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/explorar-cursos-admin" className="nav-button">Explorar Cursos</Link>
          <Link to="/mis-cursos-admin" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes-admin" className="nav-button">Mensajes</Link>
          <Link to="/mi-perfil-admin">
            <img src="/user-avatar.png" alt="Admin Avatar" className="user-avatar" />
          </Link>
        </nav>
      </header>

      <main className="historial-cursos-main">
        <aside className="perfil-sidebar">
          <div className="perfil-avatar">
            <img src="/user-avatar.png" alt="Admin Avatar" className="perfil-avatar-img" />
            <h2>Hola, Admin01!</h2>
          </div>
          <ul className="perfil-menu">
            <li><Link to="/mi-perfil-admin">Mi Perfil</Link></li>
            <li><Link to="/lista-profesores">Lista de Profesores</Link></li>
            <li><Link to="/lista-alumnos" className="active">Lista de Alumnos</Link></li>
            <li><Link to="/cambiar-contraseña-admin">Cambiar contraseña</Link></li>
            <li><Link to="/cerrar-sesion">Cerrar Sesión</Link></li>
          </ul>
        </aside>

        <section className="historial-content">
          <h1>Mi Cuenta</h1>
          <div className="historial-details">
            <h2>Lista de Alumnos</h2>
            <div className="historial-lista">
              {alumnos.map((alumno) => (
                <div key={alumno.id} className="curso-card">
                  <div className="curso-info">
                    <p><strong>Alumno:</strong> {alumno.nombre}</p>
                    <p><strong>Fecha de Inscripción:</strong> {alumno.fecha}</p>
                  </div>
                  <div className="curso-acciones">
                    <span
                      className="editar-eliminar-text"
                      onClick={() => handleEditClick(alumno.id)}
                    >
                      Editar
                    </span>
                    <span> / </span>
                    <span className="editar-eliminar-text">Eliminar</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ListaAlumnos;
