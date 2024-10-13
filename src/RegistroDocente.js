import React, { useState } from 'react';
import './RegistroDocente.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // 

function RegistroDocente() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    dni: '',
    dia: '',
    mes: '',
    anio: '',
    correo: '',
    telefono: '',
    contraseña: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Manejador de cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Enviar datos al backend
    axios.post('http://localhost:8000/api/docentes/registro/', formData) // Cambia la URL al endpoint de tu backend
      .then((response) => {
        // Si el registro es exitoso
        setSuccessMessage('¡Registro exitoso!');
        setErrorMessage('');
      })
      .catch((error) => {
        // Si hay un error
        setErrorMessage('Error al registrar.');
        setSuccessMessage('');
      });
  };

  return (
    <div className="registro-docente-container">
      <header className="registro-docente-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
      </header>

      <main className="registro-docente-main">
        <div className="registro-docente-box">
          <h2>Crear cuenta</h2>
          <form className="registro-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Nombres</label>
              <input 
                type="text" 
                name="nombres" 
                placeholder="Ingrese sus nombres"
                value={formData.nombres}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group">
              <label>Apellidos</label>
              <input 
                type="text" 
                name="apellidos" 
                placeholder="Ingrese sus apellidos"
                value={formData.apellidos}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group">
              <label>DNI</label>
              <input 
                type="text" 
                name="dni" 
                placeholder="Ingrese su DNI"
                value={formData.dni}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group">
              <label>Fecha de Nacimiento</label>
              <div className="date-inputs">
                <input 
                  type="text" 
                  name="dia" 
                  placeholder="Día" 
                  className="date-input"
                  value={formData.dia}
                  onChange={handleInputChange}
                />
                <input 
                  type="text" 
                  name="mes" 
                  placeholder="Mes" 
                  className="date-input"
                  value={formData.mes}
                  onChange={handleInputChange}
                />
                <input 
                  type="text" 
                  name="anio" 
                  placeholder="Año" 
                  className="date-input"
                  value={formData.anio}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Correo electrónico</label>
              <input 
                type="email" 
                name="correo" 
                placeholder="Ingrese su correo"
                value={formData.correo}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group">
              <label>Teléfono</label>
              <input 
                type="text" 
                name="telefono" 
                placeholder="Ingrese su teléfono"
                value={formData.telefono}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group">
              <label>Contraseña</label>
              <input 
                type="password" 
                name="contraseña" 
                placeholder="Ingrese su contraseña"
                value={formData.contraseña}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="register-button">Registrar</button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            <div className="registro-links">
              <Link to="/login-docente" className="login-link">Iniciar Sesión</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default RegistroDocente;
