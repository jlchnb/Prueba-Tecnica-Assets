import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientesList = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pagos/')
            .then(response => {
                setClientes(response.data);
            })
            .catch(error => {
                console.error('Error fetching clientes:', error);
            });
    }, []);

    return (
        <div>
            <h2>Listado de Clientes</h2>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id}>{cliente.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClientesList;