import {
  FC,
  useEffect,
  useState
} from "react"
import { useSelector } from "react-redux"

import { Link } from "react-router-dom"

import useScreenWidth from "../../../hook/useScreenWidth"

import { selectIsCartOpen } from "../../../store/cart/cart.selector"

import CartDropdown from "../CartDropdown/CartDropdown.component"
import CartIcon from "../CartIcon/CartIcon.component"
import MenuList from "../MenuList/MenuList.component"
import MenuModal from "../MenuModal/MenuModal.component"

import Logo from "../../../assets/images/logo.png"

import "./Menu.styles.scss"

const Menu: FC = () => {
  const isDesktop = useScreenWidth(992)
  const isCartOpen = useSelector(selectIsCartOpen)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)

    if (!showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeModal = () => {
    setShowModal(false)

    document.body.style.overflow = "auto"
  }

  const handleScroll = () => {
    const currentPosition = window.pageYOffset
    setScrollPosition(currentPosition)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      id="topNavbar"
    >
      <div className="container navbar-container">
        <div className="row navbar-row">
          <div className="col-6 col-lg-11 navbar-left">
            <Link
              className="navbar-brand"
              to="/"
            >
              <img
                alt="Roots Restaurant"
                className="navbar-logo"
                height={55}
                src={Logo}
                width={55}
              />
            </Link>
            <button
              aria-label="Toggle navigation"
              className={`navbar-toggler ${showModal ? "open" : "closed"}`}
              onClick={toggleModal}
              type="button"
            >
              <span className="navbar-toggler-icon">
                <div className="hamburger-icon" />
              </span>
            </button>
            {showModal && !isDesktop ? (
              <MenuModal
                showModal={showModal}
                closeModal={closeModal}
                scrollPosition={scrollPosition}
              />
            ) : (
              <MenuList
                showModal={showModal}
              />
            )}
          </div>
          <CartIcon
            cartDisplay={isCartOpen}
          />
          {isCartOpen && (
            <CartDropdown />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Menu
