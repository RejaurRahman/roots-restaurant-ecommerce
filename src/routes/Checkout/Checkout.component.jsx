import React, { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"

import "./Checkout.styles.scss"

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  const formattedPrice = `£${cartTotal.toFixed(2)}`

  return (
    <>
      <PageBanner label="Checkout" />
      <Breadcrumbs label="Checkoct" />
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {
          cartItems.map((cartItem) => (
            <CheckoutProduct
              key={cartItem.id}
              cartItem={cartItem}
            />
          ))
        }
        <span className="total">Total: {formattedPrice}</span>
      </div>
    </>
  )
}

export default Checkout
