import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const BotonStripeCheckout = ({precio}) => {
    const formatoMonedaChilena = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    });
    //const precioStripe = precio * 100;
    const publishableKey = 'pk_test_51H9kQHF2PFa2g8LOTxQtZsJkQrmjNHpphuw0EwCWWhrZM2OF58jwZtS5i8cprdS5cBBHlY1PcU5pW7NidaJ5Jszc00iELHwjTB';

    const onToken = token => {
        console.log(token);
        alert('Pago realizado exitosamente');
    }

    return(
        <StripeCheckout 
            label='Pagar ahora' 
            name='miTienda'
            currency='CLP'
            billingAddress
            shippingAddress
            image='https://i.ibb.co/sVCvWkj/logo.png'
            description={`El total de la compra es ${formatoMonedaChilena.format(precio)}`}
            amount={precio}
            panelLabel='Pagar ahora'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default BotonStripeCheckout;