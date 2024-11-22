import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CursoDetalle.css";

function CursoDetalle() {
  const { cursoId } = useParams();

  const [curso, setCurso] = useState({
    id: null,
    nombre: "",
    icono: "",
    descripcion: "",
    fechaInicio: null,
    fechaFin: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activoMesSiguiente, setActivoMesSiguiente] = useState(false);
  const [matriculado, setMatriculado] = useState(false); // Estado para verificar si ya está matriculado

  const userId = 1; // Aquí se asume un usuario logueado con ID 1. Ajusta según tu lógica.

  // Obtener datos del curso desde el backend
  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/cursos/${cursoId}/`);
        const data = response.data;

        const fechaActual = new Date();
        const mesSiguiente = fechaActual.getMonth() + 1;
        const anioActual = fechaActual.getFullYear();

        const fechaInicio = new Date(data.fecha_inicio);
        const mesInicio = fechaInicio.getMonth();
        const anioInicio = fechaInicio.getFullYear();

        const activo =
          mesInicio === mesSiguiente &&
          anioInicio === anioActual;

        setCurso({
          id: data.id,
          nombre: data.title,
          icono: data.icono || "/default-icon.png",
          descripcion: data.descripcion,
          fechaInicio: data.fecha_inicio,
          fechaFin: data.fecha_fin,
        });
        setActivoMesSiguiente(activo);
        setLoading(false);
      } catch (err) {
        console.error("Error al obtener los datos del curso:", err);
        setError("No se pudo cargar el curso.");
        setLoading(false);
      }
    };

    fetchCurso();
  }, [cursoId]);

  const handleMatricula = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/matriculas/crear/", {
        usuario: userId, // ID del usuario autenticado
        curso: cursoId, // ID del curso actual
      });
      if (response.status === 201) {
        setMatriculado(true);
        alert("Te has matriculado exitosamente en este curso.");
      }
    } catch (err) {
      console.error("Error al matricularse:", err.response?.data || err.message);
      alert("No se pudo completar la matrícula.");
    }
  };
  if (loading) return <p>Cargando datos del curso...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="course-detail-container">
      <header className="course-detail-header">
        <nav className="nav-bar">
          <button className="nav-button">Explorar Cursos</button>
          <button className="nav-button active">Mis Cursos</button>
          <button className="nav-button">Mensajes</button>
        </nav>
      </header>

      <main className="course-detail-main">
        <div className="course-detail-content">
          <div className="course-detail-title">
            <h1>{curso.nombre}</h1>
          </div>
          <div className="course-description">
            <p>{curso.descripcion || "No hay descripción disponible para este curso."}</p>
          </div>
          <h2>Estado del curso</h2>
          <p>
            {activoMesSiguiente
              ? "Este curso estará activo el próximo mes."
              : "Este curso no estará activo el próximo mes."}
          </p>
          <h2>Fechas del curso</h2>
          <p>Inicio: {curso.fechaInicio || "No disponible"}</p>
          <p>Fin: {curso.fechaFin || "No disponible"}</p>
        </div>
      </main>

      {!matriculado ? (
          <button className="register-button" onClick={handleMatricula}>
            Matricularme
          </button>
        ) : (
          <button className="register-button inscrito" disabled>
            Ya estás matriculado
          </button>
        )}

      <footer className="course-detail-footer">
      
        <a href="https://www.instagram.com/" className="help-link" >¿Necesitas ayuda? Contáctanos</a>
      </footer>
    </div>
  );
}

export default CursoDetalle;
