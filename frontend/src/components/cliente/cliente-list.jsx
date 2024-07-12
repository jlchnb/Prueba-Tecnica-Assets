import React, { useState } from 'react';
import axios from 'axios';
import './cliente-list.css';

const ClientesList = () => {
    const [clientes, setClientes] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const fetchClientes = () => {
        axios.get('http://localhost:8000/api/clientes/')
            .then(response => {
                const uniqueClientes = new Set(response.data.map(cliente => cliente.nombre));
                setClientes(Array.from(uniqueClientes));
                setLoaded(true);
            })
            .catch(error => {
                console.error('Error fetching clientes:', error);
            });
    };

    return (
        <div className="list-container">
            <h2>Listado de Clientes</h2>
            {!loaded && (
                <button onClick={fetchClientes}>Cargar Clientes</button>
            )}
            {loaded && (
                <ul>
                    {clientes.map((cliente, index) => (
                        <li key={index}>{cliente}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ClientesList;
