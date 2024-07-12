import React, { useState } from 'react';
import axios from 'axios';
import './gestores-list.css';

const GestoresList = () => {
    const [gestores, setGestores] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const fetchGestores = () => {
        axios.get('http://localhost:8000/api/gestores/')
            .then(response => {
                const uniqueGestores = new Set(response.data.map(gestor => gestor.nombre));
                setGestores(Array.from(uniqueGestores));
                setLoaded(true);
            })
            .catch(error => {
                console.error('Error fetching gestores:', error);
            });
    };

    return (
        <div className="gestores-list">
            <h2>Listado de Gestores</h2>
            {!loaded && (
                <button onClick={fetchGestores}>Cargar Gestores</button>
            )}
            {loaded && (
                <ul>
                    {gestores.map((gestor, index) => (
                        <li key={index}>{gestor}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default GestoresList;
