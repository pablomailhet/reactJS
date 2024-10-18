import { IoIosCart } from 'react-icons/io'
import './cartwidget.css'

const CartWidget = () => {
    return (
        <div>
            <IoIosCart className="cart-icon" />
            <span>1</span>
        </div>
    )
}
export default CartWidget