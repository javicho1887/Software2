import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetalleCursoDocente() {
    const { cursoId } = useParams(); // Obtener el cursoId desde la URL
    const [curso, setCurso] = useState(null);
    const [usuarios, setUsuarios] = useState([]);
    const [documentos, setDocumentos] = useState([]);
    const [actividades, setActividades] = useState([]);
    const [archivo, setArchivo] = useState(null);
    const [titulo, setTitulo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [sesiones, setSesiones] = useState([]); // Agregar el estado para sesiones


    const [showPopup, setShowPopup] = useState(false);
    const [editingActivity, setEditingActivity] = useState(null);
    const [activityForm, setActivityForm] = useState({
        nombre: "",
        descripcion: "",
        fecha_vencimiento: ""
    });

    const [evidencias, setEvidencias] = useState([]); // Evidencias cargadas
    const [archivoEvidencia, setArchivoEvidencia] = useState(null);
    const [sesionSeleccionada, setSesionSeleccionada] = useState("");
    const [descripcionEvidencia, setDescripcionEvidencia] = useState("");

    useEffect(() => {
        // Obtener detalles del curso
        axios.get(`http://127.0.0.1:8000/api/cursos/${cursoId}/`)
            .then((response) => setCurso(response.data))
            .catch((error) => console.error("Error al obtener curso:", error));

        // Obtener usuarios inscritos
        axios.get(`http://127.0.0.1:8000/api/usuarios/curso/${cursoId}/`)
            .then((response) => setUsuarios(response.data))
            .catch((error) => console.error("Error al obtener usuarios:", error));

        // Obtener documentos
        axios.get(`http://127.0.0.1:8000/api/cursos/${cursoId}/documentos/`)
            .then((response) => setDocumentos(response.data))
            .catch((error) => console.error("Error al obtener documentos:", error));

        // Obtener actividades
        axios.get(`http://127.0.0.1:8000/api/actividades/curso/${cursoId}/`)
            .then((response) => setActividades(response.data))
            .catch((error) => console.error("Error al obtener actividades:", error));


    // Obtener sesiones
    axios.get(`http://127.0.0.1:8000/api/sesiones/curso/${cursoId}/`)
    .then((response) => setSesiones(response.data)) // Actualizar sesiones
    .catch((error) => console.error("Error al obtener sesiones:", error));

        // Obtener evidencias
        axios.get(`http://127.0.0.1:8000/api/evidencias/curso/${cursoId}/`)
        .then((response) => setEvidencias(response.data))
        .catch((error) => console.error("Error al obtener evidencias:", error));

    }, [cursoId]);

    

    const handleArchivoChange = (e) => {
        setArchivo(e.target.files[0]);
    };

    const handleTituloChange = (e) => {
        setTitulo(e.target.value);
    };

    const handleSubmitDocumento = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("archivo", archivo);
        formData.append("titulo", titulo);

        axios.post(`http://127.0.0.1:8000/api/cursos/${cursoId}/documentos/upload/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                setDocumentos([...documentos, response.data]); // Actualizar la lista de documentos
                setMensaje("Documento subido con éxito");
                setTitulo("");
                setArchivo(null);
                setTimeout(() => setMensaje(""), 5000); // Limpiar el mensaje después de 5 segundos
            })
            .catch((error) => {
                console.error("Error al subir el documento:", error);
                setMensaje("Error al subir el documento");
            });
    };

    const handleOpenPopup = (actividad = null) => {
        setEditingActivity(actividad);
        setActivityForm(actividad || { nombre: "", descripcion: "", fecha_vencimiento: "" });
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setEditingActivity(null);
    };

    const handleActivityChange = (e) => {
        const { name, value } = e.target;
        setActivityForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleActivitySubmit = (e) => {
        e.preventDefault();
        const url = editingActivity
            ? `http://127.0.0.1:8000/api/actividades/${editingActivity.id}/actualizar/`
            : `http://127.0.0.1:8000/api/actividades/crear/`;
        const method = editingActivity ? "put" : "post";

        axios({
            method,
            url,
            data: { ...activityForm, curso: cursoId },
        })
            .then((response) => {
                if (editingActivity) {
                    setActividades((prev) =>
                        prev.map((act) => (act.id === response.data.id ? response.data : act))
                    );
                } else {
                    setActividades((prev) => [...prev, response.data]);
                }
                handleClosePopup();
            })
            .catch((error) => console.error("Error al guardar la actividad:", error));
    };


    const handleArchivoEvidenciaChange = (e) => {
        setArchivoEvidencia(e.target.files[0]);
    };

    const handleSesionSeleccionadaChange = (e) => {
        setSesionSeleccionada(e.target.value);
    };

    const handleDescripcionEvidenciaChange = (e) => {
        setDescripcionEvidencia(e.target.value);
    };

    const handleSubmitEvidencia = (e) => {
        e.preventDefault();
    
        // Verificar si ya existe una evidencia para la sesión seleccionada
        const existeEvidencia = evidencias.some(
            (evidencia) => evidencia.sesion === parseInt(sesionSeleccionada)
        );
    
        if (existeEvidencia) {
            alert("Ya existe una evidencia para esta sesión.");
            return;
        }
    
        const formData = new FormData();
        formData.append("curso", cursoId);
        formData.append("sesion", sesionSeleccionada);
        formData.append("archivo", archivoEvidencia);
        formData.append("descripcion", descripcionEvidencia);
    
        axios.post(`http://127.0.0.1:8000/api/evidencias/crear/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then(() => {
                setMensaje("Evidencia subida con éxito.");
                setArchivoEvidencia(null);
                setSesionSeleccionada("");
                setDescripcionEvidencia("");
                
                // Recargar las evidencias
                axios.get(`http://127.0.0.1:8000/api/evidencias/curso/${cursoId}/`)
                    .then((response) => setEvidencias(response.data))
                    .catch((error) => console.error("Error al actualizar evidencias:", error));
            })
            .catch((error) => console.error("Error al subir la evidencia:", error));
    };

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/evidencias/curso/${cursoId}/`)
            .then((response) => {
                console.log("Evidencias cargadas:", response.data);
                setEvidencias(response.data);
            })
            .catch((error) => console.error("Error al obtener evidencias:", error));
    }, [cursoId]);

    

    if (!curso) {
        return <p>Cargando detalles del curso...</p>;
    }

    return (
        <div style={{ padding: "20px" }}>
            {/* Encabezado */}
            <header style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#eaf7ff",
                padding: "10px 20px",
                borderBottom: "1px solid #ccc"
            }}>
                <div style={{ flex: 1 }}></div> {/* Espaciador izquierdo */}
                <h1 style={{
                    textAlign: "center",
                    fontSize: "24px",
                    flex: 2,
                    margin: 0
                }}>
                    Detalles del Curso
                </h1>
                <nav style={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "flex-end",
                    flex: 1
                }}>
                    <a href="/mis-cursos-docente" style={{
                        textDecoration: "none",
                        color: "#fff",
                        backgroundColor: "#00bcd4",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        fontWeight: "bold"
                    }}>
                        Mis Cursos
                    </a>
                    <a href="/mensajes-curso-docente" style={{
                        textDecoration: "none",
                        color: "#fff",
                        backgroundColor: "#00bcd4",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        fontWeight: "bold"
                    }}>
                        Mensajes
                    </a>
                    <a href="/mi-perfil-docente">
                        <img src="/user-avatar.png" alt="User Avatar" style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: "2px solid #00bcd4",
                            padding: "2px"
                        }} />
                    </a>
                </nav>
            </header>

            {/* Contenido principal */}
            <main>
                <div style={{ margin: "20px 0" }}>
                    <button onClick={() => window.history.back()} style={{
                        background: "none",
                        border: "none",
                        color: "#00bcd4",
                        fontWeight: "bold",
                        cursor: "pointer",
                        marginBottom: "10px"
                    }}>
                        ← Volver
                    </button>
                    <h2 style={{ textAlign: "center" }}>{curso.title}</h2>
                    <p style={{ textAlign: "center" }}>{curso.descripcion}</p>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "20px"
                }}>
                    {/* Usuarios inscritos */}
                    <section style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "20px",
                        textAlign: "center"
                    }}>
                        <h2>Usuarios inscritos</h2>
                        {usuarios.length > 0 ? (
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {usuarios.map((usuario) => (
                                    <li key={usuario.id} style={{
                                        background: "#000",
                                        color: "#fff",
                                        padding: "10px",
                                        margin: "5px 0",
                                        borderRadius: "5px"
                                    }}>
                                        {usuario.nombres} {usuario.apellidos}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No hay usuarios inscritos.</p>
                        )}
                    </section>

                    {/* Documentos */}
                    <section style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "20px",
                        textAlign: "center"
                    }}>
                        <h2>Documentos</h2>
                        <form onSubmit={handleSubmitDocumento}>
                            <input
                                type="text"
                                placeholder="Título del documento"
                                value={titulo}
                                onChange={handleTituloChange}
                                required
                            />
                            <input
                                type="file"
                                onChange={handleArchivoChange}
                                required
                            />
                            <button type="submit">Subir Documento</button>
                        </form>
                        {documentos.map((doc) => (
                            <p key={doc.id}>
                                <a href={`http://127.0.0.1:8000${doc.archivo}`} target="_blank" rel="noreferrer">
                                    {doc.titulo}
                                </a>
                            </p>
                        ))}
                    </section>

                    {/* Actividades */}
                    <section style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "20px",
                        textAlign: "center"
                    }}>
                        <h2>Actividades</h2>
                        <button onClick={() => handleOpenPopup()} style={{
                            marginBottom: "10px",
                            background: "#00bcd4",
                            color: "#fff",
                            border: "none",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                            Crear Actividad
                        </button>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            {actividades.map((actividad) => (
                                <li key={actividad.id}>
                                    <strong>{actividad.nombre}</strong>: {actividad.descripcion} (Vence: {actividad.fecha_vencimiento})
                                    <button onClick={() => handleOpenPopup(actividad)} style={{
                                        marginLeft: "10px",
                                        background: "#f0ad4e",
                                        color: "#fff",
                                        border: "none",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        cursor: "pointer"
                                    }}>
                                        Editar
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Sección de evidencias */}
                    <section style={{
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    textAlign: "center"
}}>
    <h3>Cargar Evidencia</h3>
    <form onSubmit={handleSubmitEvidencia}>
        <label>Selecciona la sesión:</label>
        <select value={sesionSeleccionada} onChange={handleSesionSeleccionadaChange} required>
            <option value="">-- Selecciona una sesión --</option>
            {sesiones.map((sesion) => {
                const evidenciaSubida = evidencias.some(
                    (evidencia) => evidencia.sesion === sesion.id
                );
                return (
                    <option key={sesion.id} value={sesion.id} disabled={evidenciaSubida}>
                        {`Sesión ${sesion.id} - ${sesion.fecha} ${
                            evidenciaSubida ? "(Evidencia ya subida)" : ""
                        }`}
                    </option>
                );
            })}
        </select>

        {sesionSeleccionada && evidencias.some(
            (evidencia) => evidencia.sesion === parseInt(sesionSeleccionada)
        ) ? (
            <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>
                Evidencia ya subida para esta sesión.
            </p>
        ) : (
            <>
                <label>Descripción:</label>
                <textarea
                    value={descripcionEvidencia}
                    onChange={handleDescripcionEvidenciaChange}
                    placeholder="Describe la evidencia"
                    required
                ></textarea>

                <label>Subir imagen (PNG):</label>
                <input type="file" accept="image/png" onChange={handleArchivoEvidenciaChange} required />

                <button type="submit">Subir Evidencia</button>
            </>
        )}
    </form>

    {mensaje && (
        <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>{mensaje}</p>
    )}
</section>






                </div>
            </main>

            {/* Popup */}
            {showPopup && (
                <div style={{
                    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                    <div style={{
                        backgroundColor: "white", padding: "20px", borderRadius: "5px",
                        width: "300px"
                    }}>
                        <h3>{editingActivity ? "Editar Actividad" : "Crear Actividad"}</h3>
                        <form onSubmit={handleActivitySubmit}>
                            <div>
                                <label>Nombre:</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={activityForm.nombre}
                                    onChange={handleActivityChange}
                                    required
                                    style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
                                />
                            </div>
                            <div>
                                <label>Descripción:</label>
                                <textarea
                                    name="descripcion"
                                    value={activityForm.descripcion}
                                    onChange={handleActivityChange}
                                    required
                                    style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
                                />
                            </div>
                            <div>
                                <label>Fecha de vencimiento:</label>
                                <input
                                    type="date"
                                    name="fecha_vencimiento"
                                    value={activityForm.fecha_vencimiento}
                                    onChange={handleActivityChange}
                                    required
                                    style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
                                />
                            </div>
                            <button type="submit" style={{
                                background: "#5cb85c",
                                color: "#fff",
                                border: "none",
                                padding: "10px",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}>
                                Guardar
                            </button>
                            <button type="button" onClick={handleClosePopup} style={{
                                background: "#d9534f",
                                color: "#fff",
                                border: "none",
                                padding: "10px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                marginLeft: "10px"
                            }}>
                                Cancelar
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetalleCursoDocente;
