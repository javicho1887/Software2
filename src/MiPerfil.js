import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MiPerfil.css";
import axios from "axios";

function MiPerfil() {
  const [perfil, setPerfil] = useState({
    nombres: "",
    apellidos: "",
    dni: "",
    dia: "",
    mes: "",
    ano: "",
    correo: "",
    telefono: "",
  });
  const [error, setError] = useState(null);

  const calcularEdad = (dia, mes, ano) => {
    const hoy = new Date();
    let edad = hoy.getFullYear() - ano;
    const mesActual = hoy.getMonth() + 1;
    const diaActual = hoy.getDate();

    if (mes > mesActual || (mes === mesActual && dia > diaActual)) {
      edad--;
    }
    return edad;
  };

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
  
    if (userId) {
      axios
        .get(`http://localhost:8000/api/user-profile/${userId}/`)
        .then((response) => {
          setPerfil(response.data);
          localStorage.setItem('user_name', `${response.data.nombres} ${response.data.apellidos}`); // Guarda el nombre completo
        })
        .catch((error) => {
          setError("No se pudo obtener la información del perfil");
        });
    } else {
      setError("No se encontró el ID de usuario.");
    }
  }, []);
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
            <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
          </Link>
        </nav>
      </header>

      <main className="mi-perfil-main">
        <aside className="perfil-sidebar">
          <div className="perfil-avatar">
            <img src="/user-avatar.png" alt="User Avatar" className="perfil-avatar-img" />
            <h2>Hola, {perfil.nombres}  {perfil.apellidos}!</h2>
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
                <strong>Nombre:</strong> {perfil.nombres} <strong>Apellido:</strong> {perfil.apellidos}
              </p>
              <p>
                <strong>Documento de Identificación (DNI):</strong> {perfil.dni}
              </p>
              <p>
                <strong>Edad:</strong> {perfil.dia && perfil.mes && perfil.ano ? calcularEdad(perfil.dia, perfil.mes, perfil.ano) : "No disponible"} años
              </p>
              <p>
                <strong>Fecha de Nacimiento:</strong> {perfil.dia}/{perfil.mes}/{perfil.ano}
              </p>
              <p>
                <strong>Email:</strong> {perfil.correo}
              </p>
              <p>
                <strong>Teléfono:</strong> {perfil.telefono}
              </p>
            </div>

            <button className="nav-button">Actualizar Datos</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MiPerfil;
