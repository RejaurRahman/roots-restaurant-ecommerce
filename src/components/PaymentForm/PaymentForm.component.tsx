import { v4 as uuidv4 } from "uuid"
import {
  FC,
  FormEvent,
  useState
} from "react"
import {
  useDispatch,
  useSelector
} from "react-redux"
import { Dispatch } from "@reduxjs/toolkit"
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js"
import { StripeCardElement } from "@stripe/stripe-js"

import {
  addOrderStart,
  clearCartItems
} from "../../store/cart/cart.action"
import {
  selectCartItems,
  selectCartTotal
} from "../../store/cart/cart.selector"
import { selectCurrentUser } from "../../store/user/user.selector"

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component"

import "./PaymentForm.styles.scss"

const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null

interface PaymentFormProps {
  setOrderNumber?: (value: string) => void
  setShowConfirmation?: (value: boolean) => void
  setUserLatestOrder?: (value: any) => void
}

const PaymentForm: FC<PaymentFormProps> = ({
  setOrderNumber,
  setShowConfirmation,
  setUserLatestOrder
}) => {
  const dispatch = useDispatch<Dispatch>()
  const stripe = useStripe()
  const elements = useElements()

  const amount = useSelector(selectCartTotal)
  const cartItems = useSelector(selectCartItems)
  const currentUser = useSelector(selectCurrentUser)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessingPayment(true)

    const response = await fetch(
      "/.netlify/functions/create-payment-intent",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: amount * 100
      })
    }).then((res) => res.json())

    const {
      paymentIntent: { client_secret }
    } = response

    const cardDetails = elements.getElement(CardElement)

    if (!ifValidCardElement(cardDetails)) return

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest"
        }
      }
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error.message)
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        if (setOrderNumber && setShowConfirmation && setUserLatestOrder) {
          const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
          const uniqueId = uuidv4()

          dispatch(
            addOrderStart(
              currentUser?.id ?? null,
              cartItems,
              totalAmount,
              uniqueId
            )
          )

          setOrderNumber(uniqueId ?? 0)
          setShowConfirmation(true)
          setUserLatestOrder(cartItems)
        }

        dispatch(clearCartItems())
      }
    }
  }

  return (
    <div className="payment-form-container">
      <form
        className="payment-form"
        onSubmit={paymentHandler}
      >
        <h2 className="payment-form-heading">Payment Details</h2>
        <CardElement className="payment-form-card" />
        <Button
          buttonClassType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay Now
        </Button>
      </form>
    </div>
  )
}

export default PaymentForm
