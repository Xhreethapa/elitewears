import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const PUBLIC_KEY ="pk_test_51JWxPhFefqj68vUUYafZeu0azVv0RlOb3aX1yRtAJaJcbHO1rrye3NjBYBOAdeZWvrXnJBBJZVutZTFERrejsHHS00KyXtRmnn"
const stripeTestPromise = loadStripe(PUBLIC_KEY)


function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
           
        </Elements>
    )
}

export default StripeContainer
