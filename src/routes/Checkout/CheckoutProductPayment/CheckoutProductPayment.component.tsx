import { FC } from "react"
import { useSelector } from "react-redux"

import { selectCartTotal } from "../../../store/cart/cart.selector"

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct.component"
import PaymentForm from "../../../components/PaymentForm/PaymentForm.component"

import "../Checkout.styles.scss"

interface CartItem {
  calories: number
  diet: string[]
  id: number
  imageUrl: string
  ingredients: string[]
  name: string
  notes: string
  price: number
  quantity: number
}

type CheckoutProductPaymentProps = {
  cartItems: CartItem[]
}

const CheckoutProductPayment: FC<CheckoutProductPaymentProps> = ({
  cartItems
}) => {
  const cartTotal = useSelector(selectCartTotal)

  const formattedPrice = `£${cartTotal.toFixed(2)}`

  return (
    <div className="cart-container container">
      <div className="cart-table">
        <div className="cart-table-header">
          <div className="cart-table-half cart-table-left">
            <div className="cart-table-third">&nbsp;</div>
            <div className="cart-table-seventh">Product Name</div>
          </div>
          <div className="cart-table-sixth">Price</div>
          <div className="cart-table-sixth">Quantity</div>
          <div className="cart-table-sixth">Remove</div>
        </div>
        <div className="cart-table-content">
          {cartItems.map((cartItem, index) => (
            <CheckoutProduct
              cartItem={cartItem}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="total">Total: {formattedPrice}</div>
      <PaymentForm />
    </div>
  )
}

export default CheckoutProductPayment
