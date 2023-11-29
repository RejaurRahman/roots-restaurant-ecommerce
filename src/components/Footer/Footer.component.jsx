import React from "react"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Logo from "../../assets/images/logo.png"

import data from "../../data/page-content.json"

import "./Footer.styles.scss"

library.add(
  faAngleUp,
  fab,
)

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer--backtop">
        <FontAwesomeIcon icon={["fas", "fa-angle-up"]} size="2x" />
      </div>
      <div className="container footer-container">
        <div className="row">
          <div className="col-12 col-lg-4 footer--left">
            <a href="/" className="footer--logo">
              <img src={Logo} alt="Roots Restaurant" className="footer--logo-image" />
            </a>
            <ul className="footer--address">
              <li className="footer--address-item">{data.business_details.address.street}</li>
              <li className="footer--address-item">{data.business_details.address.city}</li>
              <li className="footer--address-item">{data.business_details.address.state}</li>
              <li className="footer--address-item">{data.business_details.address.county}</li>
              <li className="footer--address-item">{data.business_details.address.postal_code}</li>
              <li className="footer--address-item">{data.business_details.address.email}</li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 footer--middle">
            <h4 className="footer--heading">{data.footer_copy.links_heading}</h4>
            <div className="footer--pages">
              <ul className="footer--pages-list">
                {data.footer_links
                  .sort((a, b) => a.ul_list - b.ul_list || a.order - b.order)
                  .filter(link => link.ul_list === 1)
                  .map((link, index) => (
                    <li className="footer--pages-item" key={index}>
                      <a href={link.href} className="footer--pages-link">{link.text}</a>
                    </li>
                  ))}
              </ul>
              <ul className="footer--pages-list">
                {data.footer_links
                  .sort((a, b) => a.ul_list - b.ul_list || a.order - b.order)
                  .filter(link => link.ul_list === 2)
                  .map((link, index) => (
                    <li className="footer--pages-item" key={index}>
                      <a href={link.href} className="footer--pages-link">{link.text}</a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-4 footer--right">
            <h4 className="footer--heading">{data.footer_copy.newsletter_heading}</h4>
            <p className="footer--bodycopy">{data.footer_copy.newsletter_copy}</p>
            <form className="footer--form">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn" type="submit">subscribe</button>
            </form>
            <ul className="footer--social">
              <li className="footer--social-list">
                <a href="https://en-gb.facebook.com/" rel="noreferrer" target="_blank" className="footer--social-link">
                  <FontAwesomeIcon icon={["fab", "fa-facebook-f"]} />
                </a>
              </li>
              <li className="footer--social-list">
                <a href="https://twitter.com/" rel="noreferrer" target="_blank" className="footer--social-link">
                  <FontAwesomeIcon icon={["fab", "fa-twitter"]} />
                </a>
              </li>
              <li className="footer--social-list">
                <a href="https://www.instagram.com/" rel="noreferrer" target="_blank" className="footer--social-link">
                  <FontAwesomeIcon icon={["fab", "fa-instagram"]} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer--copyright">
          <div className="row">
            <div className="col-12 col-lg-6">
              <span className="footer--copyright-text">
                Copyright &copy; {currentYear}. All rights reserved | Roots Healthy Restaurant
              </span>
            </div>
            <div className="col-12 col-lg-6">
              <ul className="footer--payment">
                <li className="footer--payment-list">
                  <FontAwesomeIcon icon={["fab", "fa-cc-visa"]} size="2x" />
                </li>
                <li className="footer--payment-list">
                  <FontAwesomeIcon icon={["fab", "fa-cc-mastercard"]} size="2x" />
                </li>
                <li className="footer--payment-list">
                  <FontAwesomeIcon icon={["fab", "fa-cc-paypal"]} size="2x" />
                </li>
                <li className="footer--payment-list">
                  <FontAwesomeIcon icon={["fab", "fa-cc-amex"]} size="2x" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
