import React from 'react'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import CartContext from './Context/CartContext'

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)
  return (
    <div>
        <Link className='cart' to='/'>
            <img src="/cart.png" alt="" width="60" height="60"></img>
            { getQuantity() }
        </Link>
    </div>
  )
}

export default CartWidget