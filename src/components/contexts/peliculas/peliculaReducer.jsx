import { OBTENER_PELICULA, OBTENER_PELICULAS, SELECCIONAR_PELICULA } from "../../../types";

export default (state, action) => {
    switch(action.type) {
        case OBTENER_PELICULAS:
            return {
                ...state,
                peliculas: action.payload.slice(0, 12),
                peliculascarrusel: action.payload.slice(0, 5)
            }
        case OBTENER_PELICULA:
        case SELECCIONAR_PELICULA:
            return {
                ...state,
                peliculaseleccionada: action.payload
            }
        default: 
            return state;
    }
}