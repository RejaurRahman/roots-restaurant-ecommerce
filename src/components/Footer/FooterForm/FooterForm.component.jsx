import React, { useState } from "react"

import "./FooterForm.styles.scss"

const FooterForm = () => {
  const [message, setMessage] = useState(null)

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const input = event.target.elements.email
    const email = input.value.trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailRegex.test(email)) {
      setMessage({ type: "success", content: "Thank you for subscribing!" })
      input.value = ""
    } else {
      setMessage({ type: "error", content: "Please enter a valid email address." })
    }
  }

  return (
    <>
      {message && (
        <div className={`footer--message ${message.type}`}>
          {message.content}
        </div>
      )}
      {message?.type !== "success" && (
        <form className="footer--form" onSubmit={handleFormSubmit}>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            aria-label="Enter Your Email"
            required
          />
          <button className="btn" type="submit">
            Subscribe
          </button>
        </form>
      )}
    </>
  )
}

export default FooterForm
