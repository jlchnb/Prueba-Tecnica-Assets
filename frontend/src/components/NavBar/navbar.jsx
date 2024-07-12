import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    return (
        <ul className="navbar">
            <li>
                <Link 
                    className={activeLink === '/' ? 'active' : ''} 
                    to="/" 
                    onClick={() => handleSetActiveLink('/')}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link 
                    className={activeLink === '/clientes' ? 'active' : ''} 
                    to="/clientes" 
                    onClick={() => handleSetActiveLink('/clientes')}
                >
                    Clientes
                </Link>
            </li>
            <li>
                <Link 
                    className={activeLink === '/gestores' ? 'active' : ''} 
                    to="/gestores" 
                    onClick={() => handleSetActiveLink('/gestores')}
                >
                    Gestores
                </Link>
            </li>
            <li>
                <Link 
                    className={activeLink === '/pagos' ? 'active' : ''} 
                    to="/pagos" 
                    onClick={() => handleSetActiveLink('/pagos')}
                >
                    Pagos
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
