import React from 'react';
import DATA_ARTICULOS from './articulos.data';

import PrevistaColeccion from '../../components/prevista-coleccion/prevista-coleccion.component';

class PaginaArticulos extends React.Component {
    constructor(param){
        super(param);

        this.state = {
            coleccion: DATA_ARTICULOS
        }
    }

    render() {
        const {coleccion} = this.state;
        return (<div className='pagina-articulos'>
                    {
                        coleccion.map(({id, ...parametrosColeccion}) =>(
                            <PrevistaColeccion key={id} {...parametrosColeccion} />
                        ))
                    }
                </div>)
    }
}

export default PaginaArticulos;