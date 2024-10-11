import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MiPerfil.css";
import axios from "axios";

function MiPerfil() {
  const [perfil, setPerfil] = useState({
    nombres: "Jhon",
    apellidos: "Doe",
    dni: "12345678",
    genero: "Binario",
    dia: "15",
    mes: "04",
    ano: "1995",
    correo: "jhon_doe@gmail.com",
    telefono: "+51987654321",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Cambia el ID del usuario de acuerdo a la autenticación o contexto actual
    const userId = 1; // Placeholder: Obtén el ID real desde el contexto de la aplicación

    return;

    axios
      .get(`http://localhost:8000/api/user-profile/${userId}/`)
      .then((response) => {
        setPerfil(response.data);
      })
      .catch((error) => {
        // setError("No se pudo obtener la información del perfil");
      }, []);

    console.error(error);
  });

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mi-perfil-container">
      <header className="mi-perfil-header">
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
            <img
              src="/user-avatar.png"
              alt="User Avatar"
              className="user-avatar"
            />
          </Link>
        </nav>
      </header>

      <main className="mi-perfil-main">
        <aside className="perfil-sidebar">
          <div className="perfil-avatar">
            <img
              src="/user-avatar.png"
              alt="User Avatar"
              className="perfil-avatar-img"
            />
            <h2>Hola, {perfil.nombres}!</h2>
          </div>
          <ul className="perfil-menu">
            <li>
              <Link to="/mi-perfil">Mi Perfil</Link>
            </li>
            <li>
              <Link to="/historial-cursos">Historial de cursos</Link>
            </li>
            <li>
              <Link to="/contactos">Contactos</Link>
            </li>
            <li>
              <Link to="/cambiar-contraseña">Cambiar contraseña</Link>
            </li>
            <li>
              <a href="/">Cerrar Sesión</a>
            </li>
          </ul>
        </aside>

        <section className="perfil-content">
          <h1>Mi Cuenta</h1>
          <div className="perfil-details">
            <h2>Perfil</h2>
            <div className="perfil-info">
              <p>
                <strong>Nombre:</strong> {perfil.nombres}{" "}
                <strong>Apellido:</strong> {perfil.apellidos}
              </p>
              <p>
                <strong>Documento de Identificación:</strong> {perfil.dni}{" "}
                <strong>Género:</strong> Binario
              </p>
              <p>
                <strong>Fecha de Nacimiento:</strong> {perfil.dia}/{perfil.mes}/
                {perfil.ano}
              </p>
              <p>
                <strong>Email:</strong> {perfil.correo}
              </p>
              <p>
                <strong>Teléfono:</strong> {perfil.telefono}
              </p>
            </div>

            {/* Botón Actualizar Datos */}
            <button className="nav-button">Actualizar Datos</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MiPerfil;
