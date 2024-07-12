import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pagos-list.css';

const PagosList = () => {
    const [pagos, setPagos] = useState([]);
    const [clientes, setClientes] = useState({});
    const [gestores, setGestores] = useState({});

    useEffect(() => {
        const fetchPagos = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/pagos/');
                setPagos(response.data);
            } catch (error) {
                console.error('Error fetching pagos:', error);
            }
        };

        const fetchClientes = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/clientes/');
                const clientesData = response.data.reduce((acc, cliente) => {
                    acc[cliente.id] = cliente.nombre;
                    return acc;
                }, {});
                setClientes(clientesData);
            } catch (error) {
                console.error('Error fetching clientes:', error);
            }
        };

        const fetchGestores = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/gestores/');
                const gestoresData = response.data.reduce((acc, gestor) => {
                    acc[gestor.id] = gestor.nombre;
                    return acc;
                }, {});
                setGestores(gestoresData);
            } catch (error) {
                console.error('Error fetching gestores:', error);
            }
        };

        fetchPagos();
        fetchClientes();
        fetchGestores();
    }, []);

    return (
        <div className="pagos-container">
            <h2>Listado de Pagos por Rut</h2>
            <div className="pagos-table">
                <div className="pagos-header">
                    <div className="pagos-cell">RUT</div>
                    <div className="pagos-cell">Monto</div>
                    <div className="pagos-cell">Fecha de Pago</div>
                    <div className="pagos-cell">Abonos</div>
                    <div className="pagos-cell">Cliente</div>
                    <div className="pagos-cell">Gestor</div>
                </div>
                {pagos.map(pago => (
                    <div key={pago.id} className="pagos-row">
                        <div className="pagos-cell">{pago.rut}</div>
                        <div className="pagos-cell">{pago.monto}</div>
                        <div className="pagos-cell">{pago.fecha_pago}</div>
                        <div className="pagos-cell">{pago.abonos}</div>
                        <div className="pagos-cell">{clientes[pago.cliente]}</div>
                        <div className="pagos-cell">{gestores[pago.gestor]}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PagosList;