import React from 'react';
import IniciarSesion from '../../components/iniciar-sesion/iniciar-sesion.component';
import Registrarse from '../../components/registrarse/registrarse.component';
import './iniciar-sesion-registrarse.styles.scss';

const IniciarSesionRegistrarse = () => (
    <div className='iniciar-sesion-registrarse'>
        <IniciarSesion />
        <Registrarse />
    </div>
);

export default IniciarSesionRegistrarse;