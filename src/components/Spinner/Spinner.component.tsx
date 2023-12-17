import { FC } from "react"

import "./Spinner.styles.scss"

const Spinner: FC = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container" />
    </div>
  )
}

export default Spinner
