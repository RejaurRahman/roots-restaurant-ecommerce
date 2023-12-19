import { FC } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import {
  selectCartItems,
  selectCartTotal
} from "../../store/cart/cart.selector"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"
import PaymentForm from "../../components/PaymentForm/PaymentForm.component"

import emptyBasket from "../../assets/images/basket-icon.png"

import "./Checkout.styles.scss"

const Checkout: FC = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  const formattedPrice = `£${cartTotal.toFixed(2)}`

  return (
    <>
      <PageBanner label="Checkout" />
      <Breadcrumbs label="Checkout" />
      {cartItems.length > 0 ? (
        <div className="cart-container container">
          <p className="cart-status">
            You have{" "}
            <span className="cart-status-count">{cartItems.length}</span>
            {" "}
            {cartItems.length > 1 ? (
              "items"
            ) : (
              "item"
            )}
            {" "}in your order.
          </p>
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
              {
                cartItems.map((cartItem, index) => (
                  <CheckoutProduct
                    cartItem={cartItem}
                    key={index}
                  />
                ))
              }
            </div>
          </div>
          <div className="total">Total: {formattedPrice}</div>
          <PaymentForm />
        </div>
      ) : (
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
      )}
    </>
  )
}

export default Checkout
