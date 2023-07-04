import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import peliculaContext from '../contexts/peliculas/peliculaContext';

const DivPeliculas = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;

`;

const ImgPeliculas = styled.img`
    width: 30%;
    padding: 1rem;
    box-sizing: border-box;

    @media (max-width: 900px) {
        width: 100%
    }
    
`
const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
`;

const Titulo = styled.h1`
    font-size: 1.5rem;
    margin: 1rem 0 0;
`;

const SinMargin = styled.p`
    margin: 0;
`;

const ConMargin = styled.div`
    margin: 1rem 0;
`;

const Flex = styled.div`
    display: flex;
    
`;

const PaginaPelicula = () => {

    const peliculasContext = useContext(peliculaContext);
    const {peliculaseleccionada, obtenerPelicula} = peliculasContext;

    const location = useLocation();

    const [porcentaje, setPorcentaje] = useState(0);


    

    useEffect(() => {
        obtenerPelicula(location.pathname.slice(11));
    }, [])

    return ( 
        <DivPeliculas className='container'>
            <ImgPeliculas className='imagen' src={`https://image.tmdb.org/t/p/original/${peliculaseleccionada.poster_path}`} />
            <DivInfo>
                <Titulo>{peliculaseleccionada.title}</Titulo>
                <SinMargin>{peliculaseleccionada.original_title}</SinMargin>
                <ConMargin>
                    <Flex>
                        
                        
                    </Flex>
                </ConMargin>
            </DivInfo>
        </DivPeliculas>
     );
}
 
export default PaginaPelicula;