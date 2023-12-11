import React, { useState } from "react"
import { useSelector } from "react-redux"
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js"

import { selectCartTotal } from "../../store/cart/cart.selector"
import { selectCurrentUser } from "../../store/user/user.selector"

import Button from "../Button/Button.component"

import "./PaymentForm.styles.scss"

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessingPayment(true)

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: amount * 100
      }).then((res) => {
        return res.json()
      })
    })

    const clientSecret = response.paymentIntent.client_secret

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Rejaur Rahman"
        }
      }
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error.message)
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!")
      }
    }
  }

  return (
    <div className="payment-form-container">
      <form
        className="payment-form"
        onSubmit={paymentHandler}
      >
        <h2>Payment Details:</h2>
        <CardElement />
        <Button
          buttonClassType="inverted"
          isLoading={isProcessingPayment}
        >
          Pay Now
        </Button>
      </form>
    </div>
  )
}

export default PaymentForm
