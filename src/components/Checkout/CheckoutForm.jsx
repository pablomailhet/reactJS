import { Container, Form, Button, Row, Col } from "react-bootstrap"

import { useState } from "react"

const CheckoutForm = ({ onSubmit }) => {

    const [buyer, setBuyer] = useState({
        fullName: "",
        email: "",
        c_email: "",
        phoneNumber: "",
        streetAddress: "",
        city: "",
        state: "",
        postalCode: "",
        country: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(buyer)
    }

    const handleChange = (e) => {
        setBuyer({ ...buyer, [e.target.id]: e.target.value })
    }

    return (
        <Row className="text-left p-3">
            <h2 className="text-center fs-3 text-muted">Contact Information</h2>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control onChange={handleChange} type="text" value={buyer.fullName} />
                </Form.Group>

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={handleChange} type="email" value={buyer.email} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="c_email">
                            <Form.Label>Confirm Email</Form.Label>
                            <Form.Control onChange={handleChange} type="email" value={buyer.c_email} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onChange={handleChange} type="text" value={buyer.phoneNumber} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="streetAddress">
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control onChange={handleChange} type="text" value={buyer.streetAddress} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control onChange={handleChange} type="text" value={buyer.city} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control onChange={handleChange} type="text" value={buyer.state} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="postalCode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control onChange={handleChange} type="text" value={buyer.postalCode} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control onChange={handleChange} type="text" value={buyer.country} />
                        </Form.Group>
                    </Col>
                </Row>

                <Container className="text-center p-1">
                    <Button variant="success" type="submit">Confirm Checkout</Button>
                </Container>

            </Form>
        </Row>
    )
}

export default CheckoutForm