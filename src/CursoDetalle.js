import React, { useEffect, useState } from "react";
import "./CursoDetalle.css"; // Asegúrate de que tu archivo CSS esté correctamente enlazado
import { Link, useParams } from "react-router-dom";
import { cursos } from "./utils/data";

function CursoDetalle() {
  const { cursoId } = useParams();

  const CursosData = cursos;
  const [curso, setCurso] = useState({
    id: 1,
    nombre: "Curso de Excel",
    icono: "/icon-excel.png",
    descripcion:
      "Domina Excel y aprende a gestionar y analizar datos con funciones avanzadas y tablas dinámicas.",
    horarios: ["Lunes 10:00 AM", "Martes 2:00 PM", "Miércoles 6:00 PM"],
  });

  useEffect(() => {
    const temp = CursosData.find((item) => item.id.toString() == cursoId);
    setCurso(temp);
  }, []);

  const [horarios] = useState(curso.horarios);

  const handleGuardarHorario = (horario) => {
    alert(`Has guardado el horario: ${horario}`);
  };

  return (
    <div className="course-detail-container">
      <header className="course-detail-header">
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

      <div className="course-detail">
        <button className="back-button" onClick={() => window.history.back()}>
          ←
        </button>
        <div>
          <h1>{curso.nombre}</h1>
        </div>
      </div>

      <div className="course-detail-main">
        <div className="course-detail-content">
          <img
            src={curso.icono}
            alt={curso.nombre}
            className="course-detail-icon"
          />
          <p className="course-description">{curso.descripcion}</p>

          <h2>Horarios disponibles</h2>
          <ul className="course-schedule">
            {horarios.map((horario, index) => (
              <li key={index} className="schedule-item">
                {horario}{" "}
                <button
                  className="register-button"
                  onClick={() => handleGuardarHorario(horario)}
                >
                  Guardar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="course-detail-footer">
        <p>
          ¿Necesitas ayuda?{" "}
          <a href="#" className="help-link">
            Contáctanos
          </a>
        </p>
      </div>
    </div>
  );
}

export default CursoDetalle;
