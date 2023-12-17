import { FC } from "react"
import { useSelector } from "react-redux"

import { selectCartItems } from "../../../store/cart/cart.selector"

import Button, { BUTTON_TYPE_CLASSES } from "../../../components/Button/Button.component"
import CartProducts from "../CartProducts/CartProducts.component"

import "./CartDropdown.styles.scss"

const CartDropdown: FC = () => {
  const cartItems = useSelector(selectCartItems) || []

  return (
    <div className="cart-dropdown-container">
      <div className={`cart-items ${cartItems.length === 0 ? "cart-dropdown-empty" : ""}`.trim()}>
        {
          cartItems.length ? (
            cartItems.map((item, index) => (
              <CartProducts
                cartItem={item}
                key={index}
              />
            ))
          ) : (
            <span>
              Your cart is empty
            </span>
          )
        }
      </div>
      <Button
        buttonClassType={BUTTON_TYPE_CLASSES.primary}
        buttonType="anchor"
        linkRoute="/checkout"
      >
        Checkout
      </Button>
    </div>
  )
}

export default CartDropdown
