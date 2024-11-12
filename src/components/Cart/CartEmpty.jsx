import { Container, Button } from "react-bootstrap"

import { Link } from "react-router-dom"

const CartEmpty = () => {
    return (
        <Container className="text-center p-3" as="main">
            <h2>Your Cart is Empty</h2>
            <p className="text-muted h5">It looks like you haven't added anything to your cart yet.</p>
            <Link to="/">
                <Button variant="success">Go to Shop</Button>
            </Link>
        </Container>
    )
}

export default CartEmpty