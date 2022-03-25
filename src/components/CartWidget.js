import React from 'react'
import {Link} from 'react-router-dom';

const CartWidget = () => {
  return (
    <div>
        <Link className='cart' to='/'>
            <img src="/cart.png" alt="" width="60" height="60"></img>
        </Link>
    </div>
  )
}

export default CartWidget