import { Card, Button } from 'react-bootstrap'

import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'
import { formatNumber } from '../../utils/format.js'

import './item.css'

const Item = ({ item }) => {

    const { getQuantityOfItemInCart } = useContext(CartContext)

    const quantity = item.stock - getQuantityOfItemInCart(item)

    return (
        <Card className="col-md-3 mx-3 my-3 cardItem">
            <Card.Body className='p-1'>
                <img alt={item.image.alt} src={item.image.url} className="cardItemImage" />
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className='m-0'>$ {formatNumber(item.price)}</Card.Text>
                <Card.Text className='m-0 text-muted'>{quantity ? quantity + " in stock" : "Sorry, this item is out of stock."}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to={"/item/" + item.id}>
                    <Button variant="secondary">Details</Button>
                </Link>
            </Card.Footer>
        </Card>
    )

}
export default Item