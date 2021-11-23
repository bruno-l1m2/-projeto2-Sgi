import React from "react";
import { useHistory } from "react-router";
import './style.css';
import Logo from '../../assets/SGI.png'

const Header = () =>{
    const history = useHistory();
    return (
        <div className="container-nav">
            <nav className="navbarra">
                <img className="navlogo" src={Logo} alt="logo" width="95" height="95" />
                <ul className="navbarra-item">
                    <li className="navli" onClick={() => history.push('/Home')}>Mapa</li>
                    <li className="navli" onClick={() => history.push('/Product')}>Produtos</li>
                    <li className="navli" onClick={() => history.push('/Company')}>Empresas</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;