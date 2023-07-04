import React, { useContext, useState } from 'react';
import PeliculaContext from '../contexts/peliculas/peliculaContext';
import CardPelicula from './CardPelicula';


const PeliculasInicio = () => {

    const peliculaContext = useContext(PeliculaContext);
    const {peliculas} = peliculaContext;

    const [peliculaopen, setPeliculaopen] = useState('');


    return ( 
        <div className="container">
            <section>
                <div className='peliculas'>
                    {peliculas.length != 0
                        ? (
                            peliculas.map(pelicula => (
                                <CardPelicula
                                    peliculaopen={peliculaopen}
                                    setPeliculaopen = {setPeliculaopen}
                                    key={pelicula.id}
                                    pelicula={pelicula}
                                />
                            ))
                        )
                        : null
                    } 
                </div>
            </section>
        </div>
     );
}
 
export default PeliculasInicio;