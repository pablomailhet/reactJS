import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './item.css'

const Item = ({ product }) => {
    return (
        <Card className="col-md-3 mx-3 my-3 cardItem">
            <Card.Body className='p-1'>
                <img alt={product.image.alt} src={product.image.url} className="cardItemImage" />
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className='m-0'>$ {product.price}</Card.Text>
                {
                    product.stock > 1
                        ?
                        <Card.Text className='m-0'>{product.stock} in stock</Card.Text>
                        :
                        <Card.Text className='m-0'>Last available...</Card.Text>
                }
            </Card.Body>
            <Card.Footer>
                <Link to={"/item/" + product.id}>
                    <Button variant="secondary">Details</Button>
                </Link>
            </Card.Footer>
        </Card>
    )
}
export default Item