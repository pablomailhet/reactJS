import { PiShoppingCartFill, PiShoppingCartLight } from "react-icons/pi";

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import { Link } from 'react-router-dom'

import './cartwidget.css'

const CartWidget = () => {

    const { getQuantityTotal } = useContext(CartContext)

    const quantityTotal = getQuantityTotal()

    return (
        <Link to="/cart" className='cart-link'>
            {
                quantityTotal > 0
                    ?
                    <>
                        <PiShoppingCartFill className='cart-icon cart-icon-green' />
                        <span>{quantityTotal}</span>
                    </>
                    :
                    <PiShoppingCartLight className='cart-icon cart-icon-gray' />
            }
        </Link>
    )

}
export default CartWidget