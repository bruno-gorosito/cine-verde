import { ABRIR_CERRAR_ASIDE } from "../../../types";



export default (state, action) => {
    switch(action.type) {
        case ABRIR_CERRAR_ASIDE:
            return {
                ...state,
                aside: state.aside === '' ? 'close-aside' : ''
            }
        
        default:
            return state;
    }
}