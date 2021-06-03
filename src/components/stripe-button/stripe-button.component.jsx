import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price*100;
  const publishableKey = 'pk_test_51HBB8kD1wiynfcDEjtAnrGvPSiIWnCiRGtPQCMMyPtv0Y7CxHq6n9DDF276JX60EHhmpCHHvVZWamw1YOmvs6QSt000PCtPQae';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!!');
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;