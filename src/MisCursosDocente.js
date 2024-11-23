import React, { useState, useEffect } from 'react';
import './MisCursosDocente.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MisCursosDocente() {
    const [cursos, setCursos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const docenteId = localStorage.getItem('docente_id');

        if (!docenteId) {
            setError("No se encontró el ID de docente. Por favor, inicie sesión nuevamente.");
            return;
        }

        axios
            .get(`http://localhost:8000/api/cursos/docente/${docenteId}/`)
            .then((response) => {
                setCursos(response.data);
            })
            .catch((error) => {
                setError("No se pudieron obtener los cursos. Inténtelo más tarde.");
            });
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="mis-cursos-docente-container">
            <header className="mis-cursos-docente-header">
                <img src="/logo.png" alt="NextLevel Logo" className="logo" />
                <nav className="nav-bar">
                    <Link to="/mis-cursos-docente" className="nav-button">Mis Cursos</Link>
                    <Link to="/mensajes-curso-docente" className="nav-button">Mensajes</Link>
                    <Link to="/mi-perfil-docente">
                        <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
                    </Link>
                </nav>
            </header>

            <main className="mis-cursos-docente-main">
                <h2>Mis Cursos</h2>
                <input type="text" placeholder="Buscar curso..." className="buscar-curso-input" />

                <div className="cursos-lista">
                    {cursos.length > 0 ? (
                        cursos.map((curso) => (
                            <Link to={`/curso-docente/${curso.id}`} className="curso-card" key={curso.id}>
                                <div className="curso-info">
                                    <h3>Curso: {curso.title}</h3>
                                    <p>Descripción: {curso.descripcion}</p>
                                    <p>Fecha Inicio: {curso.fecha_inicio}</p>
                                    <p>Fecha Fin: {curso.fecha_fin}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>No tienes cursos asignados en este momento.</p>
                    )}
                </div>
            </main>

            <footer className="mis-cursos-docente-footer">
                <a href="/help" className="help-link">¿Necesita ayuda?</a>
            </footer>
        </div>
    );
}

export default MisCursosDocente;
