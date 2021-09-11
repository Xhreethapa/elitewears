import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux';



 const Navbar = ({click}) => {

    const cart= useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCardCount = () => {
        return cartItems.reduce((qty, item)=> qty + Number(item.qty) ,0 )
    }




    return (
    
     


        <nav className="navbar">
            <div className="navbar__logo">
                <h2>Elite-Wears</h2>
            </div>
            <ul className="navbar__links">
                <li>
                    <input type="search"></input>
                 </li>
                <li>
                    <Link to="/Cart" className="navbar__cartlink">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                        Cart
                        <span className="cartlogo__badge">{getCardCount()}</span>

                        </span>

                      
                    </Link>
                </li>
                <li>
                    <Link to="/">
                       
                     Home
                       
                    </Link>
                </li>
                <li>
                    Hello, Sign-In
                </li>
            </ul>
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>

            </div>

        </nav>
    )
}

export default Navbar;