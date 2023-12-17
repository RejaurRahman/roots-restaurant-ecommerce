import { FC } from "react"
import { createPortal } from "react-dom"

import "./ProductModal.styles.scss"

interface ProductModalProps {
  closeModal: () => void
  ingredients: string[]
  showModal: boolean
}

const ProductModal: FC<ProductModalProps> = ({
  closeModal,
  ingredients,
  showModal
}) => {
  return (
    showModal && createPortal(
      <div
        aria-hidden={!showModal}
        aria-labelledby="navigationModalLabel"
        className={`modal fade product-modal ${showModal ? "show" : ""}`.trim()}
        onClick={closeModal}
        tabIndex={-1}
      >
        <div className="modal-overlay" />
        <div className="modal-dialog">
          <div className="modal-content">
            <h3 className="product-modal-heading">Ingredients</h3>
            <ul className="product-modal-list">
              {ingredients.map((ingredient, index) => (
                <li
                  className="product-modal-listItem"
                  key={index}
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")!
    )
  )
}

export default ProductModal
