import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import peliculaContext from '../contexts/peliculas/peliculaContext';



const CardPelicula = ({pelicula, peliculaopen, setPeliculaopen}) => {


    const peliculasContext = useContext(peliculaContext);
    const {} = peliculasContext;


    const [info, setInfo] = useState('')


    const showHideInformation = () => {
        if (info === '') {
            setPeliculaopen(pelicula.id)
            setInfo('show');
        } else if (info === 'show' ) {
            setInfo('')
        }
    }



    useEffect(() => {
        if (peliculaopen !== pelicula.id) {
            setInfo('');
        }
    }, [peliculaopen])
    
    return ( 
        <div className='card-pelicula'>
            <span onClick={showHideInformation} className="material-symbols-rounded icon-info">{info === '' ? 'info' : 'close'}</span>
            <img src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`} alt={pelicula.title}/>
            <div className={'info ' + info}>
                <div className='info-peli'>
                    <h2>{pelicula.title}</h2>
                    <p>{pelicula.overview}</p>
                </div>
                <Link to={`/peliculas/${pelicula.id}`}><button className='button-info'>Ver más</button></Link>
            </div>
        </div>
     );
}
 
export default CardPelicula;