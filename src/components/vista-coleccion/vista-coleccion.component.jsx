import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PrevistaColeccion from '../prevista-coleccion/prevista-coleccion.component';
import {selectColeccionesPreVista} from '../../redux/articulos/articulos.selectors';


import './vista-coleccion.styles.scss';

const VistaColeccion = ({colecciones}) => (
    <div className='vista-coleccion'>
        {
            colecciones.map(({id, ...parametrosColeccion}) =>(
                <PrevistaColeccion key={id} {...parametrosColeccion} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    colecciones: selectColeccionesPreVista
});

export default connect(mapStateToProps)(VistaColeccion);

