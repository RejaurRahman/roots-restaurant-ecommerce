import { FC } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

import "./CartProducts.styles.scss"

interface CartItem {
  imageUrl: string
  name: string
  price: number
  quantity: number
}

interface CartProductsProps {
  cartItem: CartItem
}

const CartProducts: FC<CartProductsProps> = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem

  const formattedPrice = `£${price.toFixed(2)}`

  return (
    <div className="cart-item-container">
      <LazyLoadImage
        alt={name}
        height={50}
        src={imageUrl}
        width={79}
      />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {formattedPrice}
        </span>
      </div>
    </div>
  )
}

export default CartProducts
