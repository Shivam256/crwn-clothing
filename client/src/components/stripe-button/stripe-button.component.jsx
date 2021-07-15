import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price*100;
  const publishableKey = 'pk_test_51HBB8kD1wiynfcDEjtAnrGvPSiIWnCiRGtPQCMMyPtv0Y7CxHq6n9DDF276JX60EHhmpCHHvVZWamw1YOmvs6QSt000PCtPQae';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
    .then(response => {
      alert('succesful payment');
    })
    .catch(error => {
      console.log('Payment Error: ', error);
      alert(
        'There was an issue with your payment! Please make sure you use the provided credit card.'
      );
    });
  };

  return(
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://image.shutterstock.com/image-vector/crown-icon-logo-template-260nw-1177149952.jpg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;