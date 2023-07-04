import React, { Fragment } from 'react';
import FuncionalState from './components/contexts/funcional/funcionalState';
import PeliculaState from './components/contexts/peliculas/peliculaState';
import Inicio from './components/Inicio';
import Aside from './components/layout/Aside';
import Header from './components/layout/Header';
import {HashRouter, Routes, Route} from 'react-router-dom'
import PaginaPelicula from './components/peliculas/PaginaPelicula';

function App() {
  return (
    <FuncionalState>
      <PeliculaState>
        <HashRouter>
          <Header />
          <Aside />
          <Routes>
            <Route exact path='/' element={<Inicio />}/>
            <Route path='peliculas/:id' element={<PaginaPelicula />} />
          </Routes>
        </HashRouter>
        
      </PeliculaState>
    </FuncionalState>
  );
}

export default App;
