import React from 'react'
import CartWidget from './CartWidget/CartWidget.jsx'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-lg-3 px-xl-5">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Musical House</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                </ul>
            </div>
            <div className='d-flex justify-content-around'>
                <ul className="w-auto navbar-nav mb-1 mb-lg-0 justify-content-end pe-3">
                    <li className="nav-item visualCart">
                        <CartWidget items={4}/>
                    </li>
                </ul>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar