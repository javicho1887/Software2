import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Evaluacion.css';  // Asegúrate de tener el archivo CSS adecuado

function Evaluacion() {
  const { cursoId } = useParams();  // Solo obtenemos el ID del curso
  const [respuestas, setRespuestas] = useState({
    respuesta1: "",
    respuesta2: "",
    respuesta3: "",
  }); // Estado para las respuestas del alumno
  const [mensaje, setMensaje] = useState(""); // Para mostrar mensajes de éxito o error

  // Función para manejar el cambio en el campo de la respuesta
  const handleRespuestaChange = (event, preguntaId) => {
    setRespuestas({
      ...respuestas,
      [preguntaId]: event.target.value,
    });
  };

  // Función para enviar las respuestas al backend
  const handleEnviarRespuestas = async () => {
    if (Object.values(respuestas).some((respuesta) => respuesta.trim() === "")) {
      setMensaje("Por favor, ingresa una respuesta para todas las preguntas.");
      return;
    }
  
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/responder-evaluacion/${cursoId}/`,
        {
          pregunta1: respuestas.respuesta1,
          pregunta2: respuestas.respuesta2,
          pregunta3: respuestas.respuesta3
        }
      );
  
      if (response.status === 200) {
        setMensaje("Tus respuestas han sido registradas correctamente.");
      }
    } catch (error) {
      console.error("Error al registrar las respuestas:", error);
      setMensaje("Hubo un error al registrar tus respuestas. Intenta de nuevo.");
    }
  };

  return (
    <div className="evaluacion-container">
      <h2>Evaluación - Curso {cursoId}</h2>
      <div className="pregunta-box">
        <p className="pregunta">
          1. ¿Qué opinas sobre la calidad del contenido del curso?
        </p>
        <textarea
          className="respuesta-input"
          value={respuestas.respuesta1}
          onChange={(e) => handleRespuestaChange(e, "respuesta1")}
          placeholder="Escribe tu respuesta aquí"
        />
      </div>
      <div className="pregunta-box">
        <p className="pregunta">
          2. ¿Te resultaron útiles los materiales proporcionados?
        </p>
        <textarea
          className="respuesta-input"
          value={respuestas.respuesta2}
          onChange={(e) => handleRespuestaChange(e, "respuesta2")}
          placeholder="Escribe tu respuesta aquí"
        />
      </div>
      <div className="pregunta-box">
        <p className="pregunta">
          3. ¿Qué mejorarías del curso?
        </p>
        <textarea
          className="respuesta-input"
          value={respuestas.respuesta3}
          onChange={(e) => handleRespuestaChange(e, "respuesta3")}
          placeholder="Escribe tu respuesta aquí"
        />
      </div>
      <button onClick={handleEnviarRespuestas} className="enviar-respuesta-btn">
        Enviar Respuestas
      </button>
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default Evaluacion;
