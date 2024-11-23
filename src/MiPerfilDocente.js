import { Link } from "react-router-dom";
import "./MiPerfilDocente.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function MiPerfilDocente() {
    const [perfil, setPerfil] = useState({
        nombres: "",
        apellidos: "",
        dni: "",
        dia: "",
        mes: "",
        anio: "",
        correo: "",
        telefono: "",
    });
    const [error, setError] = useState(null);

    const calcularEdad = (dia, mes, anio) => {
        const hoy = new Date();
        let edad = hoy.getFullYear() - anio;
        const mesActual = hoy.getMonth() + 1;
        const diaActual = hoy.getDate();

        if (mes > mesActual || (mes === mesActual && dia > diaActual)) {
            edad--;
        }
        return edad;
    };

    useEffect(() => {
        const docenteId = localStorage.getItem("docente_id");

        if (!docenteId) {
            setError("No se encontró el ID de docente. Por favor, inicie sesión nuevamente.");
            return;
        }

        axios
            .get(`http://localhost:8000/api/docente-profile/${docenteId}/`)
            .then((response) => {
                setPerfil(response.data);
                // Almacenar el nombre del docente en otro campo
                localStorage.setItem('docente_nombre', `${response.data.nombres} ${response.data.apellidos}`);
            })
            .catch(() => {
                setError("No se pudo obtener la información del perfil");
            });
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="mi-perfil-docente-container">
            <header className="mi-perfil-docente-header">
                <img src="/logo.png" alt="NextLevel Logo" className="logo" />
                <nav className="nav-bar">
                    <Link to="/mis-cursos-docente" className="nav-button">
                        Mis Cursos
                    </Link>
                    <Link to="/mensajes-curso-docente" className="nav-button">
                        Mensajes
                    </Link>
                    <Link to="/mi-perfil-docente">
                        <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
                    </Link>
                </nav>
            </header>

            <main className="mi-perfil-docente-main">
                <aside className="perfil-sidebar">
                    <div className="perfil-avatar">
                        <img src="/user-avatar.png" alt="User Avatar" className="perfil-avatar-img" />
                        <h2>Hola, {perfil.nombres}!</h2>
                    </div>
                    <ul className="perfil-menu">
                        <li>
                            <Link to="/mi-perfil-docente">Mi Perfil</Link>
                        </li>
                        <li>
                            <Link to="/contactos-docente">Contactos</Link>
                        </li>
                        <li>
                            <a href="/">Cerrar Sesión</a>
                        </li>
                    </ul>
                </aside>

                <section className="perfil-content">
                    <h1>Mi Cuenta</h1>
                    <div className="perfil-details">
                        <h2>Perfil</h2>
                        <div className="perfil-info">
                            <p>
                                <strong>Nombre:</strong> {perfil.nombres} <strong>Apellido:</strong> {perfil.apellidos}
                            </p>
                            <p>
                                <strong>Documento de Identificación (DNI):</strong> {perfil.dni}
                            </p>
                            <p>
                                <strong>Edad:</strong> {calcularEdad(perfil.dia, perfil.mes, perfil.anio)} años
                            </p>
                            <p>
                                <strong>Fecha de Nacimiento:</strong> {perfil.dia}/{perfil.mes}/{perfil.anio}
                            </p>
                            <p>
                                <strong>Email:</strong> {perfil.correo}
                            </p>
                            <p>
                                <strong>Teléfono:</strong> {perfil.telefono}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default MiPerfilDocente;
