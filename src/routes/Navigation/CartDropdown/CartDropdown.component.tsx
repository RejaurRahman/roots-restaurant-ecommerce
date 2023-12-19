import { FC } from "react"
import {
  useDispatch,
  useSelector
} from "react-redux"

import { setIsCartOpen } from "../../../store/cart/cart.action"
import { selectCartItems } from "../../../store/cart/cart.selector"
import { selectCurrentUser } from "../../../store/user/user.selector"

import Button, { BUTTON_TYPE_CLASSES } from "../../../components/Button/Button.component"
import CartProducts from "../CartProducts/CartProducts.component"

import "./CartDropdown.styles.scss"

const CartDropdown: FC = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems) || []
  const currentUser = useSelector(selectCurrentUser)

  const handleCheckout = () => {
    dispatch(setIsCartOpen(false))
  }

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
        linkRoute={currentUser ? "/checkout" : "/auth"}
        onClick={handleCheckout}
      >
        Checkout
      </Button>
    </div>
  )
}

export default CartDropdown
