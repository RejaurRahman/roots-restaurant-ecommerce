import { FC } from "react"
import { Link } from "react-router-dom"

import emptyBasket from "../../../assets/images/basket-icon.png"

import "../Checkout.styles.scss"

const EmptyCheckout: FC = () => {
  return (
    <div className="container">
      <div className="cart-empty">
        <img
          alt="Basket Icon"
          className="cart-empty-image"
          src={emptyBasket}
        />
        <p>Your basket is currently empty.</p>
        <p>Fill your boots (and your basket)</p>
        <p>
          and{" "}
          <Link to="/shop">continue shopping</Link>
          .
        </p>
      </div>
    </div>
  )
}

export default EmptyCheckout
