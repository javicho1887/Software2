import React, { useEffect, useState } from "react";
import "./MisCursos.css";
import { Link } from "react-router-dom";
import axios from "axios";

function MisCursos() {
  const userId = localStorage.getItem("user_id");

  const [data, setData] = useState([]);

  const images = {
    Excel: "/excel-icon.png",
    PowerBI: "/powerbi-icon.png",
    Java: "/java-icon.png",
    Python: "/python-icon.png",
    Tableau: "/tableau-icon.png",
    Figma: "/figma-icon.png",
  };

  useEffect(() => {
    if (!userId) {
      console.error("El ID de usuario no está definido en localStorage");
      return;
    }

    const getCursosData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/cursos/usuario/${userId}/`);
        if (response.status === 200) {
          setData(response.data);
        } else {
          console.error("Error al cargar los cursos:", response.status);
        }
      } catch (error) {
        console.error("Error en la solicitud al backend:", error);
      }
    };

    getCursosData();
  }, [userId]);

  if (!userId) {
    return <div>Error: El ID de usuario no está definido. Por favor, inicie sesión.</div>;
  }

  return (
    <div className="mis-cursos-container">
      <header className="mis-cursos-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to={`/ver-asistencia/${userId}`} className="nav-button">
            Ver Asistencia
          </Link>
          <Link to="/explorar-cursos" className="nav-button">
            Explorar Cursos
          </Link>
          <Link to="/mensajes" className="nav-button">
            Mensajes
          </Link>
          <Link to="/mi-perfil">
            <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
          </Link>
        </nav>
      </header>

      <main className="mis-cursos-main">
        <section className="mis-cursos-section">
          <h2>Mis Inscripciones</h2>
          <div className="cursos-grid">
            {data.map((item) => {
              const rutaCurso = item.registrado
                ? `/curso-registrado/${item.id}`
                : `/curso-detalle/${item.id}`;

              return (
                <Link
                  to={`${rutaCurso}?titulo=${encodeURIComponent(item.title)}`}
                  className="curso-card"
                  key={item.id}
                >
                  <div className="curso-card">
                    <img
                      src={images[item.title] || "/default-icon.png"}
                      alt={item.title}
                      className="curso-icon"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="mis-cursos-footer">
        <a href="/help" className="help-link">
          ¿Necesita ayuda?
        </a>
      </footer>
    </div>
  );
}

export default MisCursos;
