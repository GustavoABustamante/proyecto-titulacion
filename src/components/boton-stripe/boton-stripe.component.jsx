import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const BotonStripeCheckout = ({precio}) => {
    const precioStripe = precio * 100;
    const publishableKey = 'pk_test_51H9kQHF2PFa2g8LOTxQtZsJkQrmjNHpphuw0EwCWWhrZM2OF58jwZtS5i8cprdS5cBBHlY1PcU5pW7NidaJ5Jszc00iELHwjTB';

    const onToken = token => {
        console.log(token);
        alert('Pago realizado exitosamente');
    }

    return(
        <StripeCheckout 
            label='Pagar ahora' 
            name=''
            billingAddress
            shippingAddress
            image='https://i.ibb.co/H2L4Tjk/hombre.jpg'
            description={`El total de la compras es $${precio}`}
            amount={precioStripe}
            panelLabel='Pagar ahora'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default BotonStripeCheckout;