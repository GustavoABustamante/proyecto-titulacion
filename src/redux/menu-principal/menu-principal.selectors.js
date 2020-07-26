import {createSelector} from 'reselect';

const selectMenuPrincipal = state => state.menuPrincipal;

export const selectSeccionesMenuPrincipal = createSelector(
    [selectMenuPrincipal],
    menuPrincipal => menuPrincipal.secciones
);