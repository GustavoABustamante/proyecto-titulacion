import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...parametros}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...parametros}/>
        {
            label ? 
            (<label className={`${parametros.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>) 
            : null
        }
    </div>
);

export default FormInput;