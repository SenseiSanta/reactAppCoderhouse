//@ts-check
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { RiMenuFill } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget.jsx'
import '../Navbar/Navbar.css'
import Logo from '../Logo/Logo'

function Navbar() {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light px-lg-3 px-xl-5" id='navbar'>
        <div className="container-fluid" id='NavbarOrder'>
            <div id='topNavbar'>
                <Link to='/'className="navbar-brand" id='navbarBrand'> <Logo /> </Link>
                <div id='cartBox'>
                    <ul id='rightNavbar'>
                        <li id='rightNavbarItem'>
                            <Link id='linkToCart' to={'/cart'}> <CartWidget /> </Link>
                        </li>
                        <li id='rightNavbarItem'>
                            <Link id='linkToContact' to={'/contact'}> <AiOutlineMail style={{width: '45px', height: '40px'}}/> </Link>
                        </li>
                        <li id='rightNavbarItem'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                                <span id='menuButton'> <RiMenuFill style={{width: '45px', height: '40px'}} /> </span>
                            </button> 
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse navbar-collapse navbarCategories" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-lg-0" id='navbarItemsOrder'>
                    <li className="nav-item">
                        <Link to='/category/guitar' id='navbarCategory' className="nav-link">Guitar</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/category/drum' id='navbarCategory' className="nav-link">Drum</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/category/key' id='navbarCategory' className="nav-link">Key</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar