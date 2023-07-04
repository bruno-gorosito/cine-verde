import React, { useReducer } from 'react';
import { ABRIR_CERRAR_ASIDE } from '../../../types';
import funcionalContext from './funcionalContext';
import funcionalReducer from './funcionalReducer';

const FuncionalState = props => {

    const initialState = {
        aside: ''
    }

    const [state, dispatch ] = useReducer(funcionalReducer, initialState);

    const abrirCerrarAside = () => {
        dispatch({
            type: ABRIR_CERRAR_ASIDE
        })
    }
    
    return ( 
        <funcionalContext.Provider
            value= {{
                aside: state.aside,
                abrirCerrarAside
            }}
        >
            {props.children}
        </funcionalContext.Provider>
     );
}
 
export default FuncionalState;