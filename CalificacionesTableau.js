import React, { useState } from 'react';
import './CalificacionesTableau.css';
import { useNavigate } from 'react-router-dom'; // Cambia useHistory por useNavigate

function CalificacionesTableau() {
  const navigate = useNavigate(); // Cambia history por navigate
  const [hoveredComment, setHoveredComment] = useState('');

  const comments = {
    'Practica Aula': 'Buen trabajo en la práctica, continué así.',
    'Exposición de grupo': 'Se notó el esfuerzo en la presentación.',
    'Proyecto final': 'Excelente trabajo, se superaron las expectativas.',
    'Tarea semanal': 'Buena investigación y análisis.',
    'Prueba escrita': 'Demostraste un gran dominio del tema.',
  };

  return (
    <div className="calificaciones-tableau-container">
      <button className="back-button" onClick={() => navigate('/curso-tableau')}>
        ← Atras
      </button>

      <h1>Centro de Calificaciones / Curso Tableau</h1>
      <div className="calificaciones-list">
        <div 
          className="calificacion-item" 
          onMouseEnter={() => setHoveredComment(comments['Practica Aula'])} 
          onMouseLeave={() => setHoveredComment('')}
        >
          Practica Aula: <strong>20</strong>
        </div>
        <div 
          className="calificacion-item" 
          onMouseEnter={() => setHoveredComment(comments['Exposición de grupo'])} 
          onMouseLeave={() => setHoveredComment('')}
        >
          Exposición de grupo: <strong>15</strong>
        </div>
        <div 
          className="calificacion-item" 
          onMouseEnter={() => setHoveredComment(comments['Proyecto final'])} 
          onMouseLeave={() => setHoveredComment('')}
        >
          Proyecto final: <strong>18</strong>
        </div>
        <div 
          className="calificacion-item" 
          onMouseEnter={() => setHoveredComment(comments['Tarea semanal'])} 
          onMouseLeave={() => setHoveredComment('')}
        >
          Tarea semanal: <strong>19</strong>
        </div>
        <div 
          className="calificacion-item" 
          onMouseEnter={() => setHoveredComment(comments['Prueba escrita'])} 
          onMouseLeave={() => setHoveredComment('')}
        >
          Prueba escrita: <strong>17</strong>
        </div>
      </div>

      {/* Mostrar el comentario al pasar el mouse */}
      {hoveredComment && <div className="comment-popup">{hoveredComment}</div>}
    </div>
  );
}

export default CalificacionesTableau;
