import React, { useState } from "react";
import "./MetodoPago.css"; // Asegúrate de crear también este archivo CSS
import axios from "axios";

function MetodoPago() {
  const [metodo, setMetodo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const guardarMetodoPago = () => {
    const userId = localStorage.getItem("user_id");
    const authToken = localStorage.getItem("auth_token"); // Verificar si tienes un token
  
    if (userId && metodo) {
      axios
        .put(
          `http://127.0.0.1:8000/api/actualizar-metodo-pago/${userId}/`,
          { metodo_pago: metodo },
          {
            headers: {
              Authorization: `Bearer ${authToken}`, // Ajusta según el sistema de autenticación
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setMensaje("Método de pago actualizado correctamente.");
        })
        .catch((error) => {
          if (error.response) {
            console.error("Error de respuesta del servidor:", error.response.data);
            setMensaje(`Error: ${error.response.data.detail || "No autorizado"}`);
          } else {
            console.error("Error de red o cliente:", error.message);
            setMensaje("Error al actualizar el método de pago.");
          }
        });
    } else {
      setMensaje("Por favor, selecciona un método de pago.");
    }
  };
  

  return (
    <div className="metodo-pago-container">
      <h1>Selecciona tu Método de Pago</h1>
      <div className="metodo-pago-options">
        <label>
          <input
            type="radio"
            name="metodo"
            value="transferencia"
            onChange={(e) => setMetodo(e.target.value)}
          />
          Transferencia Bancaria
        </label>
        <label>
          <input
            type="radio"
            name="metodo"
            value="credito"
            onChange={(e) => setMetodo(e.target.value)}
          />
          Tarjeta de Crédito
        </label>
        <label>
          <input
            type="radio"
            name="metodo"
            value="debito"
            onChange={(e) => setMetodo(e.target.value)}
          />
          Tarjeta de Débito
        </label>
      </div>
      <button className="guardar-button" onClick={guardarMetodoPago}>
        Guardar Método de Pago
      </button>
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default MetodoPago;
