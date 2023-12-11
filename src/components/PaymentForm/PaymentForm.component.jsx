import React from "react"
import {
  CardElement ,
  useStripe,
  useElements
} from "@stripe/react-stripe-js"

import Button from "../Button/Button.component"

import "./PaymentForm.styles.scss"

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const paymentHandler = async (e) => {
    e.preventDefault()

    if (!stripe || elements) {
      return
    }
  }

  return (
    <div className="payment-form-container">
      <div className="payment-inner-container">
        <h2>Payment Details:</h2>
        <CardElement />
        <Button buttonClassType="inverted">
          Pay Now
        </Button>
      </div>
    </div>
  )
}

export default PaymentForm
