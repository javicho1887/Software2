import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Importa useParams
import './Asistencia.css';
import { Link } from "react-router-dom";

function Asistencia() {
    const { userId } = useParams(); // Obtén el userId desde la URL
    const [asistencia, setAsistencia] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAsistencia = async () => {
        try {
            const url = `http://127.0.0.1:8000/api/asistencia/usuario/${userId}/`; // Inserta el userId dinámico
            console.log("URL generada:", url); // Depuración para verificar la URL
            const response = await axios.get(url);
            if (response.status === 200) {
                setAsistencia(response.data);
            } else {
                console.error("Error al cargar la asistencia:", response.status);
                setError("Error al cargar los datos de asistencia");
            }
        } catch (error) {
            console.error("Error en la solicitud al backend:", error);
            setError("No se pudo obtener la asistencia.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAsistencia();
    }, [userId]); // Se vuelve a ejecutar si cambia el userId

    if (loading) {
        return <div className="asistencia-container"><p>Cargando asistencia...</p></div>;
    }

    if (error) {
        return <div className="asistencia-container"><p>{error}</p></div>;
    }

    return (
        <div className="asistencia-container">
            <header className="asistencia-header">
                <img src="/logo.png" alt="NextLevel Logo" className="logo" />
                <nav className="nav-bar">
                    <a href="/explorar-cursos" className="nav-button">Explorar Cursos</a>
                    <a href="/mis-cursos" className="nav-button">Mis Inscripciones</a>
                    <a href="/mensajes" className="nav-button">Mensajes</a>
                    <Link to="/mi-perfil">
            <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
          </Link>
                </nav>
            </header>

            <main className="asistencia-main">
                <section className="asistencia-section">
                    <h2>Asistencia</h2>
                    {asistencia.length === 0 ? (
                        <p>No hay registros de asistencia disponibles.</p>
                    ) : (
                        <table className="asistencia-table">
                            <thead>
                                <tr>
                                    <th>Curso</th>
                                    <th>Sesión Fecha</th>
                                    <th>Fecha Registro</th>
                                    <th>Asistencia</th>
                                </tr>
                            </thead>
                            <tbody>
                                {asistencia.map((registro, index) => (
                                    <tr key={index}>
                                        <td>{registro.curso}</td>
                                        <td>{registro.sesion_fecha}</td>
                                        <td>{registro.fecha_registro}</td>
                                        <td>{registro.presente ? "Presente" : "Ausente"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </section>
            </main>

            <footer className="asistencia-footer">
                <a href="/help" className="help-link">¿Necesita ayuda?</a>
            </footer>
        </div>
    );
}

export default Asistencia;
