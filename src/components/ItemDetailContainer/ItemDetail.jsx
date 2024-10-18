import { Card } from 'react-bootstrap'
import BackButton from '../BackButton/BackButton'

const ItemDetail = ({ product }) => {
    return (
        <Card className="col-md mx-4 my-4">
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <img alt={product.image.alt} src={product.image.url} className="itemDetailCardImg" />
                <Card.Text className="pt-2">{product.description}</Card.Text>
                <Card.Text>$ {product.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <BackButton />
            </Card.Footer>
        </Card>
    )
}

export default ItemDetail