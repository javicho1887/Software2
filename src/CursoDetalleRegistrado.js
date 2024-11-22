import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import './CursoDetalleRegistrado.css';

function CursoDetalleRegistrado() {
  const { cursoId } = useParams(); 
  const [searchParams] = useSearchParams();
  const cursoTitulo = searchParams.get("titulo"); 
 
  const [sesiones, setSesiones] = useState([]);

  const getSesionesData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/sesiones/curso/${cursoId}/`);
      if (response.status === 200) {
        setSesiones(response.data);
      }
    } catch (error) {
      console.error("Error al cargar las sesiones:", error);
    }
  };

  useEffect(() => {
    getSesionesData();
  }, [cursoId]);

  const [asesorias, setAsesorias] = useState([]);
  const getAsesoriasData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/asesorias/curso/${cursoId}/`);
      if (response.status === 200) {
        setAsesorias(response.data);
      }
    } catch (error) {
      console.error("Error al cargar las asesorías:", error);
    }
  };

  useEffect(() => {
    getAsesoriasData();
  }, [cursoId]);

  const [usuarios, setUsuarios] = useState([]);

  const getUsuariosData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/usuarios/curso/${cursoId}/`);
      if (response.status === 200) {
        setUsuarios(response.data);
      }
    } catch (error) {
      console.error("Error al cargar los usuarios:", error);
    }
  };

  useEffect(() => {
    getUsuariosData();
  }, [cursoId]);

  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/cursos/${cursoId}/documentos/`)
      .then((response) => {
        setDocumentos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los documentos:", error);
      });
  }, [cursoId]);

  const [actividades, setActividades] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedActividad, setSelectedActividad] = useState(null);


  useEffect(() => {
    const fetchActividades = async () => {
      try {
        console.log(`Fetching actividades for cursoId: ${cursoId}`); // Verifica el cursoId
        const response = await fetch(`http://127.0.0.1:8000/api/actividades/curso/${cursoId}/`);

        if (response.ok) {
          const data = await response.json();
          setActividades(data);
        } else {
          console.error('Error al obtener las actividades.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchActividades();
}, [cursoId]);

  // Abrir modal con la actividad seleccionada
  const openModal = (actividad) => {
    setSelectedActividad(actividad);
    setModalOpen(true);
  };

  // Cerrar modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedActividad(null);
  };


  return (
    <div className="curso-detalle-container">
      <header className="curso-detalle-header">
        <nav className="curso-nav-bar">
          <a href={`/sugerencias/curso/${cursoId}`} className="curso-nav-button">Sugerencias</a>
          <a href="/explorar-cursos" className="curso-nav-button">Explorar Cursos</a>
          <a href="/mis-cursos" className="curso-nav-button active">Mis Cursos</a>
          <a href="/mensajes" className="curso-nav-button">Mensajes</a>
          <a href={`/encuesta/${cursoId}`} className="curso-nav-button">Encuesta</a>
          <Link to="/mi-perfil">
            <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
          </Link>
        </nav>
      </header>

      <main className="curso-detalle-main">
        <div className="curso-titulo">
          <button className="curso-back-button" onClick={() => window.history.back()}>
            ←
          </button>
          <h1 className="curso-titulo-texto">{cursoTitulo || "Curso"}</h1>
        </div>

        <div className="curso-detalle-grid">
          <section className="curso-detalle-box">
            <h2 className="curso-detalle-box-titulo">Evaluaciones</h2>
            {sesiones.length > 0 ? (
              <ul className="curso-detalle-lista">
                {sesiones.map((sesion) => (
                  <li key={sesion.id} className="curso-detalle-item">
                    <strong>Sesión:</strong> {sesion.nombre} <br />
                    <strong>Fecha:</strong> {new Date(sesion.fecha).toLocaleString()}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="curso-detalle-vacio">No hay evaluaciones disponibles.</p>
            )}
          </section>

          <section className="curso-detalle-box">
            <h2 className="curso-detalle-box-titulo">Horarios de Sesiones</h2>
            {sesiones.length > 0 ? (
              <ul className="curso-detalle-lista">
                {sesiones.map((sesion) => (
                  <li key={sesion.id} className="curso-detalle-item">
                    <a
                      href="https://ulima-edu-pe.zoom.us/j/83944102481?pwd=i1ZRcIuQvAQT1tiAYqik12WNwBGyCK.1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="curso-detalle-enlace"
                    >
                      {new Date(sesion.fecha).toLocaleDateString()} - {new Date(sesion.fecha).toLocaleTimeString()}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="curso-detalle-vacio">No hay horarios disponibles.</p>
            )}
          </section>

          <section className="curso-detalle-box">
            <h2 className="curso-detalle-box-titulo">Asesorías</h2>
            {asesorias.length > 0 ? (
              <ul className="curso-detalle-lista">
                {asesorias.map((asesoria) => (
                  <li key={asesoria.id} className="curso-detalle-item">
                    <a
                      href="https://ulima-edu-pe.zoom.us/j/83944102481?pwd=i1ZRcIuQvAQT1tiAYqik12WNwBGyCK.1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="curso-detalle-enlace"
                    >
                      {new Date(asesoria.fecha).toLocaleDateString()} - {new Date(asesoria.fecha).toLocaleTimeString()} - {asesoria.descripcion}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="curso-detalle-vacio">No hay asesorías disponibles.</p>
            )}
          </section>
        </div>

        <div className="curso-detalle-columnas">
          <section className="curso-calificaciones">
            <h2 className="curso-detalle-box-titulo">Calificaciones</h2>
            <div className="curso-calificaciones-box">
              <p className="curso-calificaciones-texto">Tu calificación actual es: <strong>85</strong></p>
              <button className="curso-calificaciones-boton">Ir</button>
            </div>
          </section>

          <section className="curso-detalle-box">
            <h2 className="curso-detalle-box-titulo">Alumnos Inscritos</h2>
            {usuarios.length > 0 ? (
              <ul className="curso-detalle-lista">
                {usuarios.map((usuario, index) => (
                  <li key={index} className="curso-detalle-item">
                    <strong>{usuario.nombres} {usuario.apellidos}</strong>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="curso-detalle-vacio">No hay alumnos inscritos.</p>
            )}
          </section>

          <section className="curso-detalle-box">
            <h2>Documentos del curso</h2>
            <div className="documentos-box">
              {documentos.length > 0 ? (
                documentos.map((documento, index) => (
                  <div key={index} className="documento">
                    <a href={`http://127.0.0.1:8000${documento.archivo}`} target="_blank" rel="noopener noreferrer">
                      {documento.titulo}
                    </a>
                  </div>
                ))
              ) : (
                <p>No hay documentos disponibles para este curso.</p>
              )}
            </div>
          </section>
        </div>
       
   {/* Sección de actividades */}
   <section className="curso-detalle-box">
          <h2>Actividades del curso</h2>
          {actividades.length > 0 ? (
            <ul>
              {actividades.map((actividad) => (
                <li key={actividad.id}>
                  <h3 
                    style={{ cursor: "pointer", color: "blue" }} 
                    onClick={() => openModal(actividad)}
                  >
                    {actividad.nombre}
                  </h3>
                  <p><strong>Fecha de vencimiento:</strong> {actividad.fecha_vencimiento}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay actividades para este curso.</p>
          )}
        </section>

        {/* Modal */}
        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>{selectedActividad.nombre}</h2>
              <p>{selectedActividad.descripcion}</p>
              <p><strong>Fecha de vencimiento:</strong> {selectedActividad.fecha_vencimiento}</p>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default CursoDetalleRegistrado;
