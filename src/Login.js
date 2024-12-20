import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Verifica si hay un mensaje de registro exitoso y lo muestra
  useEffect(() => {
    const registroExitoso = localStorage.getItem('registroExitoso');
    if (registroExitoso) {
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      localStorage.removeItem('registroExitoso'); // Elimina el indicador de éxito para no volver a mostrarlo
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Usuario o contraseña incorrectos");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Login exitoso:", data);
        localStorage.setItem("user_id", data.user_id); // Guarda el user_id en localStorage
        navigate("/mi-perfil"); // Redirige a la página del perfil del usuario después del login
      })
      .catch((error) => {
        console.error("Error en el login:", error);
        alert("Usuario o contraseña incorrectos");
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <img src="/logo.png" alt="NextLevel Logo" className="logo" />
          <h2>¿Listo para ver tu potencial?</h2>
          <br />
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Usuario"
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="login-links">
            <Link to="/register" className="register-link">
              Regístrate ahora
            </Link>
            <Link to="/recuperar-contraseña" className="forgot-password-link">
              Olvidé mi contraseña
            </Link>
            <br/>
            <div>
              <Link to="/login-docente" className="docente-link">
                Soy Docente
              </Link>
              <Link to="/login-admin" className="admin-link">
                Soy Admin
              </Link>
            </div>
          </div>
        </div>
        <div className="login-right">
          <img
            src="/climbing-image.jpg"
            alt="Climbing"
            className="login-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
