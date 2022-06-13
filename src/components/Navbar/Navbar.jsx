import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget.jsx'
import ItemListContainer from '../ItemListContainer/ItemListContainer.jsx'
import navbarcss from '../Navbar/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-lg-3 px-xl-5">
        <div className="container-fluid">
            <Link to='/'className="navbar-brand" id='navbarBrand'> Musical House </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbarItemsOrder'>
                    <li className="nav-item">
                        <Link to='/product/:category' className="nav-link" aria-current="page" href="#">Guitar</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/product/:category' className="nav-link" href="#">Drum</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/product/:category' className="nav-link" href="#">Key</Link>
                    </li>
                </ul>
            </div>
            <div className='d-flex justify-content-around' id='cartBox'>
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