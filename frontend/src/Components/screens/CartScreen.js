import React,{useState} from 'react'
import './CartScreen.css'
import CartItem from '../CartItem'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';  
import StripeContainer from '../Payment/StripeContainer'
//actions

import {addToCart, removeFromCart} from '../../redux/actions/cartActions'


const CartScreen = () => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    const {cartItems} = cart;

    const qtyChangeHandler = ( id, qty) =>{
        dispatch(addToCart(id, qty));
    }
    const removeFromCartHandler =(id) =>{
        dispatch(removeFromCart(id));
    }

    const getCardCount= ()=>{
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    const getCartSubTotal =() =>{
        return cartItems.reduce((price, item)=> item.price * item.qty + price, 0)
    }
  
    const [showItem, setshowItem] = useState(false)
    return (
        <div className="cartscreen">
            {showItem ? <StripeContainer/>:<>
                <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>you cart is empty <Link to='./' >Go Back Shopping</Link></div>
                ):cartItems.map(item =>(
                    <CartItem 
                                key={item.product}
                                item ={item}
                                qtyChangeHandler={qtyChangeHandler}
                                removeFromCart={removeFromCartHandler}/>
                )
                )}
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p> Subtotal ({getCardCount()}) items</p>
                    <p> Price: ${getCartSubTotal().toFixed(2)}</p>
                    <button onClick={()=> setshowItem(true)}>Buy Now</button>
                </div>

            </div>
            </>}
           
         
        </div>
    )
}

export default CartScreen
