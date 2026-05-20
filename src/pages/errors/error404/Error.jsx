import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import TopButton from '../../../components/topButton/TopButton'
import './Error.css'

export default function Error404() {
  return (
    <div className="error-main">
      <Header />
      <div className="error-content">
        <div className="error-illustration">
          <img
            src={require('../../../assets/images/manOnTable.svg')}
            alt="Page not found illustration"
            className="error-svg"
            loading="lazy"
          />
        </div>
        <div className="error-text">
          <h1 className="error-404">404</h1>
          <h2 className="error-subtitle">Page Not Found</h2>
          <p className="error-message">
            Looks like this page went on a penetration test...
            and didn't come back.
          </p>
          <Link to="/" className="btn-primary error-home-btn" data-cursor>
            {'\u2190'} Go Home
          </Link>
        </div>
      </div>
      <Footer />
      <TopButton />
    </div>
  )
}
