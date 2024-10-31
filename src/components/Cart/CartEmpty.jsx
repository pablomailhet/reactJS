import { Container, Row, Col, Button } from "react-bootstrap"

import { Link } from "react-router-dom"

const CartEmpty = () => {
    return (
        <Container className="text-center p-3" as="main">
            <h2>Carrito vacio.</h2>
            <Link to={"/"}>
                <Button variant="success">Add Products</Button>
            </Link>
        </Container>
    )
}

export default CartEmpty