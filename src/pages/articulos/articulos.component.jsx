import React from 'react';
import {Route} from 'react-router-dom';

import VistaColeccion from '../../components/vista-coleccion/vista-coleccion.component';
import PaginaColeccion from '../coleccion/coleccion.component';

const PaginaArticulos = ({match}) => (
    <div className='pagina-articulos'>
        <Route exact path={`${match.path}`} component={VistaColeccion} />
        <Route path={`${match.path}/:idColeccion`} component={PaginaColeccion} />
    </div>
);



export default PaginaArticulos;