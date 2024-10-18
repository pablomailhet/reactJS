import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Item = ({ product }) => {
    return (
        <Card className="col-md-3 mx-3 my-3 cardItem">
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <img alt={product.image.alt} src={product.image.url} className="cardItemImage" />
                <Card.Text>$ {product.price}</Card.Text>
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