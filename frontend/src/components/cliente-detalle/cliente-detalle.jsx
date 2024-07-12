import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cliente-detalle.css';

const ClienteDetalle = () => {
    const [clientes, setClientes] = useState([]);
    const [pagos, setPagos] = useState([]);
    const [gestores, setGestores] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [clientesRes, pagosRes, gestoresRes] = await Promise.all([
                axios.get('http://localhost:8000/api/clientes/'),
                axios.get('http://localhost:8000/api/pagos/'),
                axios.get('http://localhost:8000/api/gestores/')
            ]);

            setClientes(clientesRes.data);
            setPagos(pagosRes.data);
            setGestores(gestoresRes.data);
            setLoaded(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const getClienteDetalles = () => {
        const clienteDetalles = {};

        pagos.forEach(pago => {
            const clienteId = pago.cliente;
            const cliente = clientes.find(c => c.id === clienteId);
            const gestor = gestores.find(g => g.id === pago.gestor);

            if (cliente && gestor) {
                const clienteNombre = cliente.nombre;

                if (!clienteDetalles[clienteNombre]) {
                    clienteDetalles[clienteNombre] = {
                        totalAbonos: 0,
                        gestores: {}
                    };
                }

                clienteDetalles[clienteNombre].totalAbonos += parseFloat(pago.abonos);

                if (!clienteDetalles[clienteNombre].gestores[gestor.nombre]) {
                    clienteDetalles[clienteNombre].gestores[gestor.nombre] = 0;
                }

                clienteDetalles[clienteNombre].gestores[gestor.nombre] += parseFloat(pago.abonos);
            }
        });

        return clienteDetalles;
    };

    const clienteDetalles = getClienteDetalles();

    return (
        <div>
            <div className="cliente-container">
                <h2 className="centered-title">Abono total por Cliente</h2>
                {Object.keys(clienteDetalles).map(clienteNombre => (
                    <div key={clienteNombre} className="cliente-card">
                        <h3>{clienteNombre}</h3>
                        <p>Total Abonos Recibidos: ${clienteDetalles[clienteNombre].totalAbonos.toFixed(2)}</p>
                        <h4>Gestores:</h4>
                        <ul>
                            {Object.keys(clienteDetalles[clienteNombre].gestores).map(gestorNombre => (
                                <li key={gestorNombre}>
                                    {gestorNombre}: {clienteDetalles[clienteNombre].gestores[gestorNombre].toFixed(2)}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClienteDetalle;
