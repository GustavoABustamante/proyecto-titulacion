import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectSeccionesMenuPrincipal} from '../../redux/menu-principal/menu-principal.selectors';
import ItemMenu from '../item-menu/item-menu.component';
import './menu-principal.styles.scss';

const MenuPrincipal = ({secciones}) => (
    <div className="menu-principal">
        {
            secciones.map(({id, ...parametrosSecciones}) => (
                <ItemMenu key={id} {...parametrosSecciones} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
  secciones: selectSeccionesMenuPrincipal
});

export default connect(mapStateToProps)(MenuPrincipal);