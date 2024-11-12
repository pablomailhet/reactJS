import { Button } from "react-bootstrap"

import { useState } from "react"

const ItemCount = ({ stock, quantityInCart, onAdd }) => {

    const [quantity, setQuantity] = useState(1)

    const handleClickDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleClickIncreaseQuantity = () => {
        if (quantity < (stock - quantityInCart)) {
            setQuantity(quantity + 1)
        }
    }

    return (
        <div className="d-flex justify-content-start">
            {
                (stock - quantityInCart) > 0
                    ?
                    <>
                        <div>
                            <Button variant="outline-success" size="sm" onClick={handleClickDecreaseQuantity}>-</Button>
                            <span className="mx-2">Quantity: {quantity}</span>
                            <Button variant="outline-success" size="sm" onClick={handleClickIncreaseQuantity}>+</Button>
                        </div>
                        <div className="ms-4">
                            <Button variant="success" size="sm" onClick={() => onAdd(quantity)}>ADD TO CART</Button>
                        </div>
                    </>
                    :
                    <div>
                        <span>Sorry, this item is out of stock.</span>
                    </div>
            }
        </div>
    )
}

export default ItemCount