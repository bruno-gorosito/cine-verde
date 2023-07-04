import React, { useContext, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import FuncionalContext from '../contexts/funcional/funcionalContext';
import { Link } from 'react-router-dom';

const Aside = () => {

    const funcionalContext = useContext(FuncionalContext);
    const {aside} = funcionalContext;

    const [search, setSearch] = useState('');
    const [resultadobusqueda, setResultadobusqueda] = useState([]);


    const buscar = async () => {
        const resultado = await ClienteAxios.get(`search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=es&query=${search}&page=1&include_adult=false`);
        setResultadobusqueda(resultado.data.results.filter(pelicula => pelicula.original_language === 'es' || pelicula.original_language === 'en').slice(0, 3));
        console.log(resultado)
    }

    useEffect(() => {
        search.trim() !== '' ? buscar() : setResultadobusqueda([]);
    }, [search])

    return ( 
        <aside className= {'aside ' + aside}>
            <ul className='search-area'>
                <li className='search'>
                        <input
                            type='text'
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                            name= 'search'
                            placeholder='Search...'
                            className='search-input'
                        />
                        <button className='material-symbols-rounded'>search</button>
                </li>
                {resultadobusqueda.length !== 0
                    ? resultadobusqueda.map(pelicula => (
                        <Link className='link-style'>
                            <li className='resultados-busqueda' key={pelicula.id}>
                                <div className='info-resultado'>
                                    <p>{pelicula.title}</p>
                                    <p className='language'>{pelicula.original_language === 'en' ? 'Inglés' : 'Español'}</p>    
                                </div>
                                <img src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}/>
                                <div className='after'></div>
                            </li>
                        </Link>
                    ))
                    : null
                }
            </ul>
            <ul className="list">
                <li className="list-item1">Inicio</li>
                <li className="list-item2">Cartelera</li>
                <li className="list-item3">Próximos Estrenos</li>
                <li className="list-item4">Contacto</li>
            </ul>
        </aside>
     );
}
 
export default Aside;