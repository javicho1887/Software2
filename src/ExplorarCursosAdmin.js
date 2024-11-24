import "./ExplorarCursosAdmin.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Para la navegación

function ExplorarCursos() {
  const [usuarios, setUsuarios] = useState([]);
  const [docentes, setDocentes] = useState([]);
  const [cursos, setCursos] = useState([]); // Estado para la lista de cursos
  const [editUserId, setEditUserId] = useState(null); // ID del usuario en edición
  const [editDocenteId, setEditDocenteId] = useState(null); // ID del docente en edición
  const [editedName, setEditedName] = useState(""); // Nombre temporal durante edición
  const [editedLastName, setEditedLastName] = useState(""); // Apellido temporal durante edición
  const navigate = useNavigate(); 
  
  
  const handleLogout = () => {
    // Aquí puedes limpiar cualquier estado de sesión, como tokens
    navigate("/login-admin");
  };
  // Obtener usuarios
  useEffect(() => {
    fetch("http://localhost:8000/api/usuarios/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los usuarios");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Usuarios:", data);
        setUsuarios(data);
      })
      .catch((error) => console.error("Error al cargar los usuarios:", error));
  }, []);

  // Obtener docentes
  useEffect(() => {
    fetch("http://localhost:8000/api/docentes/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los docentes");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Docentes:", data);
        setDocentes(data);
      })
      .catch((error) => console.error("Error al cargar los docentes:", error));
  }, []);

  // Obtener cursos
  useEffect(() => {
    fetch("http://localhost:8000/api/cursos/") // Endpoint del backend para cursos
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los cursos");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Cursos:", data);
        setCursos(data);
      })
      .catch((error) => console.error("Error al cargar los cursos:", error));
  }, []);

  // Función para calcular la edad
  const calcularEdad = (dia, mes, anio) => {
    if (!dia || !mes || !anio) {
      return "No disponible";
    }

    const hoy = new Date();
    let edad = hoy.getFullYear() - anio;

    if (hoy.getMonth() + 1 < mes || (hoy.getMonth() + 1 === mes && hoy.getDate() < dia)) {
      edad--;
    }

    return edad;
  };

  // Manejar edición del nombre y apellido
  const handleEdit = (id, name, lastName, isUser = true) => {
    if (isUser) {
      setEditUserId(id);
    } else {
      setEditDocenteId(id);
    }
    setEditedName(name);
    setEditedLastName(lastName);
  };

  // Guardar los cambios
  const handleSave = (id, isUser = true) => {
    const url = isUser
      ? `http://localhost:8000/api/usuarios/${id}/`
      : `http://localhost:8000/api/docentes/${id}/`;

    const updatedData = { nombres: editedName, apellidos: editedLastName };

    fetch(url, {
      method: "PATCH", // Usamos PATCH para actualizar parcialmente
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al guardar los cambios en el backend");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos actualizados desde el backend:", data);

        if (isUser) {
          setUsuarios((prevUsuarios) =>
            prevUsuarios.map((usuario) =>
              usuario.id === id
                ? { ...usuario, nombres: editedName, apellidos: editedLastName }
                : usuario
            )
          );
          setEditUserId(null);
        } else {
          setDocentes((prevDocentes) =>
            prevDocentes.map((docente) =>
              docente.id === id
                ? { ...docente, nombres: editedName, apellidos: editedLastName }
                : docente
            )
          );
          setEditDocenteId(null);
        }
      })
      .catch((error) => console.error("Error al guardar cambios:", error));
  };
  const actualizarVisibilidadCurso = (cursoId, visible) => {
    fetch(`http://localhost:8000/api/cursos/${cursoId}/visibilidad/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ visible }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar la visibilidad del curso");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
        setCursos((prevCursos) =>
          prevCursos.map((curso) =>
            curso.id === cursoId ? { ...curso, visible } : curso
          )
        );
      })
      .catch((error) => console.error(error));
  };
  

  return (
    <div className="courses-container">
      <header className="courses-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
      </header>

      <main className="courses-layout">
        <h1 className="list-title">Usuarios, Docentes y Cursos</h1>

        <div className="lists-container">
          {/* Lista de usuarios */}
          <div className="list">
            <h2 className="list-title">Lista de usuarios:</h2>
            <ul className="user-list">
              {usuarios.map((usuario) => (
                <li className="user-item" key={usuario.id}>
                  {editUserId === usuario.id ? (
                    <div>
                      <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        placeholder="Nombre"
                      />
                      <input
                        type="text"
                        value={editedLastName}
                        onChange={(e) => setEditedLastName(e.target.value)}
                        placeholder="Apellido"
                      />
                      <button onClick={() => handleSave(usuario.id, true)}>Guardar</button>
                    </div>
                  ) : (
                    <div>
                      <strong>{usuario.nombres} {usuario.apellidos}</strong>
                      <span className="correo">{usuario.correo}</span>
                      <span className="edad">
                        Edad: {calcularEdad(usuario.dia, usuario.mes, usuario.ano)}
                      </span>
                      <button
                        onClick={() =>
                          handleEdit(usuario.id, usuario.nombres, usuario.apellidos, true)
                        }
                      >
                        Editar
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Lista de docentes */}
          <div className="list">
            <h2 className="list-title">Lista de docentes:</h2>
            <ul className="user-list">
              {docentes.map((docente) => (
                <li className="user-item" key={docente.id}>
                  {editDocenteId === docente.id ? (
                    <div>
                      <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        placeholder="Nombre"
                      />
                      <input
                        type="text"
                        value={editedLastName}
                        onChange={(e) => setEditedLastName(e.target.value)}
                        placeholder="Apellido"
                      />
                      <button onClick={() => handleSave(docente.id, false)}>Guardar</button>
                    </div>
                  ) : (
                    <div>
                      <strong>{docente.nombres} {docente.apellidos}</strong>
                      <span className="correo">{docente.correo}</span>
                      <span className="edad">
                        Edad: {calcularEdad(docente.dia, docente.mes, docente.anio)}
                      </span>
                      <button
                        onClick={() =>
                          handleEdit(docente.id, docente.nombres, docente.apellidos, false)
                        }
                      >
                        Editar
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Lista de cursos */}
          <div className="list">
            <h2 className="list-title">Lista de cursos:</h2>
            <ul className="user-list">
              {cursos.map((curso) => (
                <li className="user-item" key={curso.id}>
                <strong>{curso.title}</strong>
                <input
                  type="checkbox"
                  checked={curso.visible}
                  onChange={(e) => actualizarVisibilidadCurso(curso.id, e.target.checked)}
                />
              </li>
              
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="courses-footer">
      <button className="logout-button" onClick={handleLogout}>
          Cerrar Sesión
        </button>
        <a href="/help" className="help-link">¿Necesita ayuda?</a>
      </footer>
    </div>
  );

}

export default ExplorarCursos;
