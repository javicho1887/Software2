import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ActualizarPerfil.css"; // Opcional si necesitas estilos 

function ActualizarPerfil() {
  const [perfil, setPerfil] = useState({
    nombres: "",
    apellidos: "",
    dni: "",
    correo: "",
    telefono: "",
  });
//ESTE ES EL MÍO
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    if (userId) {
      axios
        .get(`http://localhost:8000/api/user-profile/${userId}/`)
        .then((response) => setPerfil(response.data))
        .catch((error) =>
          setMensaje("Error al cargar la información del usuario.")
        );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil({ ...perfil, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("user_id");
  
    // Solicitud PUT usando Axios
    axios
      .put(`http://127.0.0.1:8000/api/user-profile/${userId}/update/`, perfil)
      .then((response) => {
        setMensaje("Perfil actualizado correctamente.");
      })
      .catch((error) => {
        if (error.response) {
          setMensaje(`Error: ${error.response.data.error || "No se pudo actualizar el perfil."}`);
        } else {
          setMensaje("Error de red. Por favor, inténtalo más tarde.");
        }
      });
  };
  return (
    <div className="actualizar-perfil-container">
      <h1>Actualizar Perfil</h1>
      {mensaje && <p>{mensaje}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={perfil.nombres}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={perfil.apellidos}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dni">DNI:</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={perfil.dni}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="correo">Correo:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={perfil.correo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={perfil.telefono}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default ActualizarPerfil;
