import "./ExplorarCursosAdmin.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function ExplorarCursos() {
  const [usuarios, setUsuarios] = useState([]);
  const [docentes, setDocentes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/usuarios/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los usuarios");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos de usuarios recibidos del backend:", data); // Depuración
        setUsuarios(data);
      })
      .catch((error) => console.error("Error al cargar los usuarios:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/docentes/") // Asegúrate de usar una URL diferente para los docentes
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los docentes");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos de docentes recibidos del backend:", data); // Depuración
        setDocentes(data);
      })
      .catch((error) => console.error("Error al cargar los docentes:", error));
  }, []);

  // Función para calcular la edad
  const calcularEdad = (dia, mes, anio) => {
    if (!dia || !mes || !anio ) {
      return "No disponible"; // Si falta algún dato, regresa "No disponible"
    }
  
    const hoy = new Date();
    let edad = hoy.getFullYear() - anio;
  
    // Ajusta la edad si el cumpleaños aún no ha ocurrido este año
    if (hoy.getMonth() + 1 < mes || (hoy.getMonth() + 1 === mes && hoy.getDate() < dia)) {
      edad--;
    }
  
    return edad;
  };
  

  return (
    <div className="courses-container">
      <header className="courses-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/mi-perfil">
            <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
          </Link>
        </nav>
      </header>

      <main className="courses-layout">
  <h1 className="list-title">Usuarios y Docentes</h1>
  <div className="lists-container">
    <div className="list">
      <h2 className="list-title">Lista de usuarios:</h2>
      <ul className="user-list">
        {usuarios.map((usuario) => (
          <li className="user-item" key={usuario.id}>
            <strong>
              {usuario.nombres} {usuario.apellidos}
            </strong>
            <span className="correo">{usuario.correo}</span>
            <span className="edad">
              Edad: {calcularEdad(usuario.dia, usuario.mes, usuario.ano)}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="list">
      <h2 className="list-title">Lista de docentes:</h2>
      <ul className="user-list">
      {docentes.map((docente) => {
  console.log("Docente:", docente);  // Verifica qué datos llegan
  return (
    <li className="user-item" key={docente.id}>
      <strong>
        {docente.nombres} {docente.apellidos}
      </strong>
      <span className="correo">{docente.correo}</span>
      <span className="edad">
        Edad: {calcularEdad(docente.dia, docente.mes, docente.anio)}
      </span>
    </li>
  );
})}

      </ul>
    </div>
  </div>
</main>


      <footer className="courses-footer">
        <a href="/help" className="help-link">¿Necesita ayuda?</a>
      </footer>
    </div>
  );
}

export default ExplorarCursos;
