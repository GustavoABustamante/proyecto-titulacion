import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, btnAddItem, iniciarSesionGoogle, inverted, ...parametros}) => (
    <button className={`${inverted ? 'inverted': ''} ${btnAddItem ? 'btn-add-item': ''} ${iniciarSesionGoogle ? 'iniciar-sesion-google': ''} custom-button`} {...parametros}>
        {children}
    </button>
);

export default CustomButton