import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, iniciarSesionGoogle, ...parametros}) => (
    <button className={`${iniciarSesionGoogle ? 'iniciar-sesion-google': ''} custom-button`} {...parametros}>
        {children}
    </button>
);

export default CustomButton