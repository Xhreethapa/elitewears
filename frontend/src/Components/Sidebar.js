import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Sidebar = ({show, click}) => {
    const sidebarClass= ["sidebar"];
    if (show){
        sidebarClass.push('show')
    }

    const cart= useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCardCount = () => {
        return cartItems.reduce((qty, item)=> qty + Number(item.qty) ,0 )
    }

    return (

    <div className={sidebarClass.join(" ")}>
            <ul className="sidebar__links" onClick={click}>
                <li>
                    <Link to='/cart'>
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                        Cart <span className="sidebar__cartbadge">{getCardCount()}</span>
                        </span></Link>

                </li>
                <li>
                    <Link to='/' >Shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
