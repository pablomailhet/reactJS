import { Card, Button } from 'react-bootstrap'


import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

import ItemCount from '../ItemCount/ItemCount'
import ItemEnd from '../ItemEnd/ItemEnd'

const ItemDetail = ({ product }) => {

    const [showItemCount, setShowItemCount] = useState(true)

    const { addItem, getQuantityOfItemInCart } = useContext(CartContext)

    const onAdd = (quantityToAdd) => {
        addItem(product, quantityToAdd)
        setShowItemCount(false)
    }

    return (
        <Card className="col-md mx-4 my-4">
            <Card.Body className="d-flex">
                <div className="col-3 me-1">
                    <img alt={product.image.alt} src={product.image.url} className='img-fluid' />
                </div>
                <div className="col-9">
                    <Card.Title className="text-start">{product.name}</Card.Title>
                    <Card.Text className="pt-2 text-start">{product.description}</Card.Text>
                    <Card.Text className="text-start">$ {product.price}</Card.Text>
                </div>
            </Card.Body>
            <Card.Footer>
                {
                    showItemCount
                        ?
                        <ItemCount stock={product.stock} initial={getQuantityOfItemInCart(product)} onAdd={onAdd} />
                        :
                        <ItemEnd />
                }
            </Card.Footer>
        </Card>
    )
}

export default ItemDetail