import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Encuesta() {
    const { cursoId } = useParams(); // Obtener el ID del curso desde la URL
    const navigate = useNavigate(); // Hook para redirigir al usuario
    const [pregunta1, setPregunta1] = useState("");
    const [pregunta2, setPregunta2] = useState("");
    const [pregunta3, setPregunta3] = useState("");
    const [mensaje, setMensaje] = useState("");

    const enviarEncuesta = async () => {
        try {
            const datos = {
                curso: cursoId,
                pregunta1,
                pregunta2,
                pregunta3,
            };
            console.log("Datos enviados:", datos);
            const response = await axios.post("http://127.0.0.1:8000/api/encuestas/", datos, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.status === 201) {
                setMensaje("Encuesta enviada con éxito.");
                setTimeout(() => {
                    navigate(-1); // Redirige a la página anterior después de 2 segundos
                }, 2000);
            }
        } catch (error) {
            console.error("Error al enviar la encuesta:", error.response?.data || error.message);
            setMensaje("Error al enviar la encuesta.");
        }
    };

    return (
        <div>
            <h1>Encuesta de Satisfacción</h1>
            <div>
                <label>Del 1 al 10, ¿qué te pareció el curso?</label>
                <select
                    value={pregunta1}
                    onChange={(e) => setPregunta1(e.target.value)}
                >
                    <option value="">Selecciona una opción</option>
                    {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>¿Recomendarías este curso a tus amigos?</label>
                <select
                    value={pregunta2}
                    onChange={(e) => setPregunta2(e.target.value)}
                >
                    <option value="">Selecciona una opción</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div>
                <label>¿Cómo te pareció la experiencia en nuestra plataforma?</label>
                <textarea
                    value={pregunta3}
                    onChange={(e) => setPregunta3(e.target.value)}
                    placeholder="Escribe tu opinión aquí"
                ></textarea>
            </div>
            <button onClick={enviarEncuesta}>Enviar</button>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}

export default Encuesta;
