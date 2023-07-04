import React, { useContext, useEffect, useState } from 'react';
import {Carousel as ReactCarousel} from 'react-responsive-carousel';
import PeliculaContext from '../contexts/peliculas/peliculaContext';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ArrowBackIos, ArrowForwardIosOutlined} from '@mui/icons-material';

const Carrusel = () => {

    const peliculasContext = useContext(PeliculaContext);
    const {peliculascarrusel} = peliculasContext;

    
    return ( 
        <div className="carousel-container">
            <ReactCarousel
                swipeable={false}
                emulateTouch={false}
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                autoPlay
                interval={4000}
                infiniteLoop={true}
                renderArrowPrev = {(onClickHandler, hasPrev, label) => (
                    <button type="button" aria-label={label} className="arrow arrow-prev" onClick={onClickHandler}><ArrowBackIos /></button>
                )}
                renderArrowNext = {(onClickHandler, hasNext, label) => (
                <button type="button" aria-label={label} className="arrow arrow-next" onClick={onClickHandler}><ArrowForwardIosOutlined /></button>
                )}
            >
                {peliculascarrusel.map((pelicula) => (
                    <div key={pelicula.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`} alt={pelicula.title}/>
                        <div className="carrusel-info">
                            <p className="carrusel-info">{pelicula.title}</p>
                        </div>
                    </div>
                ))}
            </ReactCarousel>
        </div>
     );
}
 
export default Carrusel;