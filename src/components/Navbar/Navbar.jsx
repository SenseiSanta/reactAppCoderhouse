import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget.jsx'
import navbarcss from '../Navbar/Navbar.css'
import Logo from '../Logo/Logo'

function Navbar() {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light px-lg-3 px-xl-5" id='navbar'>
        <div className="container-fluid">
            <Link to='/'className="navbar-brand" id='navbarBrand'> <Logo /> </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbarItemsOrder'>
                    <li className="nav-item">
                        <Link to='/category/guitar' id='navbarCategory' className="nav-link" aria-current="true">Guitar</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/category/drum' id='navbarCategory' className="nav-link">Drum</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/category/key' id='navbarCategory' className="nav-link">Key</Link>
                    </li>
                </ul>
            </div>
            <div className='d-flex justify-content-around' id='cartBox'>
                <ul className="w-auto navbar-nav mb-1 mb-lg-0 justify-content-end pe-3">
                    <li className="nav-item">
                        <Link id='linkToCart' to={'/cart'}> <CartWidget items={4}/> </Link>
                    </li>
                </ul>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </nav>
    <div id='navEnding'></div>
    </>
  )
}

export default Navbar