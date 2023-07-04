import React, { useContext } from 'react';
import FuncionalContext from '../contexts/funcional/funcionalContext';
import logo from '../../imgs/logo.webp';

const Header = () => {

    const funcionalContext = useContext(FuncionalContext);
    const {aside, abrirCerrarAside} = funcionalContext;


    return ( 
        <header>
            <div className= {'btn-aside ' + aside} onClick={abrirCerrarAside}>
                <div className="btn-aside1"></div>
                <div className="btn-aside2"></div>
                <div className="btn-aside3"></div>
            </div>
            
            <div className='container-header-mobile'>
                <img className='logo' src={logo} alt='logo'/>
            </div>
            <div className='container-header'>
                <img className='logo' src={logo} alt='logo'/>
                
                <ul className="list list-header">
                    <li className="list-item1">Inicio</li>
                    <li className="list-item2">Cartelera</li>
                    <li className="list-item3">Próximos Estrenos</li>
                    <li className="list-item4">Contacto</li>
                </ul>
            </div>
        </header>
     );
}
 
export default Header;