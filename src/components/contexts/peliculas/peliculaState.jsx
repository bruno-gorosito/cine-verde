import React, { useReducer } from 'react';
import ClienteAxios from '../../../config/axios';
import { OBTENER_PELICULA, OBTENER_PELICULAS, SELECCIONAR_PELICULA } from '../../../types';
import peliculaContext from './peliculaContext';
import peliculaReducer from './peliculaReducer';



const PeliculaState = props => {
    
    const initialState = {
        peliculas : [],
        peliculascarrusel: [],
        peliculaseleccionada : {}
    }

    const [state, dispatch ] = useReducer(peliculaReducer, initialState);

    //Funciones del crud
    const obtenerPeliculas = async ()  => {
        const respuesta = await ClienteAxios.get(`movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=es&page=1`)
        dispatch({
            type: OBTENER_PELICULAS,
            payload: respuesta.data.results
        });
    }

    const seleccionarPelicula = id => {
        dispatch({
            type: SELECCIONAR_PELICULA,
            payload: id
        })
    }

    const obtenerPelicula = async(id) => {
        const respuesta = await ClienteAxios.get(`movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=es`);
        dispatch({
            type: OBTENER_PELICULA,
            payload: respuesta.data
        })
    }

    return ( 
        <peliculaContext.Provider
            value={{
                peliculas: state.peliculas,
                peliculascarrusel: state.peliculascarrusel,
                peliculaseleccionada: state.peliculaseleccionada,
                obtenerPeliculas,
                seleccionarPelicula,
                obtenerPelicula
            }}
        >
            {props.children}
        </peliculaContext.Provider>
     );
}
 
export default PeliculaState;