import React, { Fragment, useContext, useEffect, useState } from 'react';
import Carrusel from './carrusel/Carrusel';
import PeliculaContext from './contexts/peliculas/peliculaContext';
import PeliculasInicio from './peliculas/PeliculasInicio';


const Inicio = () => {

    
    
    const peliculaContext = useContext(PeliculaContext);
    const { obtenerPeliculas} = peliculaContext;

    
    useEffect(() => {
        obtenerPeliculas();
    }, [])
    
    return (

        <Fragment>
            <Carrusel />
            <PeliculasInicio />
        </Fragment>
     );
}
 
export default Inicio;