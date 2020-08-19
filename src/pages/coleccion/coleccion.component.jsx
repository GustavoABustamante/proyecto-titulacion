import React from 'react';
import {connect} from 'react-redux';

import ItemColeccion from '../../components/item-coleccion/item-coleccion.component';
import {selectColeccion} from '../../redux/articulos/articulos.selectors';

import './coleccion.styles.scss';

const PaginaColeccion = ({coleccion}) => {
    console.log(coleccion);
    const {titulo, items} = coleccion;
    return(
    <div className='pagina-coleccion'>
        <h2 className='titulo'>{titulo}</h2>
        <div className='items'>
            {
                items.map(item=> ( <ItemColeccion key={item.id} item={item} /> ))
            }
        </div>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({
    coleccion: selectColeccion(ownProps.match.params.idColeccion)(state)
});

export default connect(mapStateToProps)(PaginaColeccion);
