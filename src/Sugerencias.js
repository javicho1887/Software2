import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

function Sugerencias() {
    const { cursoId } = useParams(); // Obtener cursoId desde la ruta
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId"); // Obtener userId desde los parámetros de búsqueda
    const [detalle, setDetalle] = useState('');
    const [mensaje, setMensaje] = useState('');
    const navigate = useNavigate(); // Hook para navegar

    const enviarSugerencia = async () => {
        try {
            const datos = {
                curso: cursoId,
                detalle: detalle,
                userId: userId // Incluir userId en la solicitud (opcional si es necesario)
            };
            console.log('Datos enviados:', datos);
            const response = await axios.post('http://127.0.0.1:8000/api/sugerencias/crear/', datos, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 201) {
                setMensaje('Sugerencia enviada con éxito.');
                setDetalle('');

                // Espera 2 segundos antes de redirigir
                setTimeout(() => {
                    navigate(-1); // Redirigir a la página anterior
                }, 2000);
            }
        } catch (error) {
            console.error('Error al enviar la sugerencia:', error.response?.data || error.message);
            setMensaje('Error al enviar la sugerencia.');
        }
    };

    return (
        <div>
            <h1>Sugerencias</h1>
            <textarea
                value={detalle}
                onChange={(e) => setDetalle(e.target.value)}
                placeholder="Escribe tu sugerencia aquí"
            />
            <button onClick={enviarSugerencia}>Enviar</button>
            {mensaje && <p>{mensaje}</p>} {/* Mostrar mensaje de éxito o error */}
        </div>
    );
}

export default Sugerencias;
