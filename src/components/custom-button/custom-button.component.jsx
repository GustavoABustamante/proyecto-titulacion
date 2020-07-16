import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, iniciarSesionGoogle, inverted, ...parametros}) => (
    <button className={`${inverted ? 'inverted': ''} ${iniciarSesionGoogle ? 'iniciar-sesion-google': ''} custom-button`} {...parametros}>
        {children}
    </button>
);

export default CustomButton