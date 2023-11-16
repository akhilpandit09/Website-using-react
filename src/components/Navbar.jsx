import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-color py-5 pt-lg-5 sticky-lg-top">
  <div className="container">
    <a className="navbar-brand h1 text-white text-uppercase fw-bold" href="/">Your <span className="bg-primary p-1 border-none rounded text-white">Company</span> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0 text-capitalize gap-4 fw-semibold">
        <li className="nav-item">
          <a  className="nav-link active text-white" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a  className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a  className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a  className="nav-link" href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
