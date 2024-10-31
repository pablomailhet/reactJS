import { Container, Button } from "react-bootstrap"

import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const handleClickDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleClickIncreaseQuantity = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    return (
        <div className="d-flex justify-content-start">
            <div>
                {
                    stock > 1
                        ?
                        <>
                            <Button variant="outline-success" size="sm" onClick={handleClickDecreaseQuantity}>-</Button>
                            <span className="mx-2">Quantity: {quantity}</span>
                            <Button variant="outline-success" size="sm" onClick={handleClickIncreaseQuantity}>+</Button>
                        </>
                        :
                        <span className="mx-2">Last available...</span>
                }
            </div>
            <div className="ms-4">
                <Button variant="success" size="sm" onClick={() => onAdd(quantity)}>ADD TO CART</Button>
            </div>
        </div>
    )
}

export default ItemCount