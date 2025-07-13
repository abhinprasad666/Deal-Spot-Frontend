import React from 'react'
import CheckoutSteps from './CheckoutSteps'
import ShippingAddressPage from './ShippingAddressForm'
import ConfirmOrderPage from './ConfirmOrderPage'

const CheckOut = () => {
  return (
    <div>
      <CheckoutSteps/>
      <ShippingAddressPage/>
      <ConfirmOrderPage/>
    </div>
  )
}

export default CheckOut
