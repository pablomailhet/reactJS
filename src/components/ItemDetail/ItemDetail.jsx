import { Card } from 'react-bootstrap'

import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

import ItemCount from '../ItemCount/ItemCount'
import ItemEnd from '../ItemEnd/ItemEnd'

import { formatNumber } from '../../utils/format.js'

import { toast } from 'react-toastify'

const ItemDetail = ({ item }) => {

    const [showItemCount, setShowItemCount] = useState(true)

    const { addItem, getQuantityOfItemInCart } = useContext(CartContext)

    const onAdd = (quantityToAdd) => {
        addItem(item, quantityToAdd)

        toast.info(
            <div className="toast-content">
                <img src={item.image.url} alt={item.image.alt} className="toast-avatar" />
                <span>{item.name} has been added to your cart.</span>
            </div>
            , { icon: false })

        setShowItemCount(false)
    }

    return (
        <Card className="col-md mx-4 my-4">
            <Card.Body className="d-flex">
                <div className="col-3 me-1">
                    <img alt={item.image.alt} src={item.image.url} className='img-fluid' />
                </div>
                <div className="col-9">
                    <Card.Title className="text-start">{item.name}</Card.Title>
                    <Card.Text className="pt-2 text-start">{item.description}</Card.Text>
                    <Card.Text className="text-start">$ {formatNumber(item.price)}</Card.Text>
                </div>
            </Card.Body>
            <Card.Footer>
                {
                    showItemCount
                        ?
                        <ItemCount stock={item.stock} quantityInCart={getQuantityOfItemInCart(item)} onAdd={onAdd} />
                        :
                        <ItemEnd />
                }
            </Card.Footer>
        </Card>
    )
}

export default ItemDetail