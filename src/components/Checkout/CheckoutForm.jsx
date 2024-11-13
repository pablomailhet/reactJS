import { Container, Form, Button, Alert, Row } from "react-bootstrap"

import { useState } from "react"

const CheckoutForm = ({ onSubmit }) => {

    /*
    const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        streetAddress: '',
        apartment: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        paymentMethod: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    })
  */

    const [buyer, setBuyer] = useState({
        fullName: "",
        email: "",
        c_email: "",
        phoneNumber: "",
        streetAddress: ""
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
                    <Form.Control onChange={handleChange} type="text" required value={buyer.fullName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleChange} type="email" required value={buyer.email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="c_email">
                    <Form.Label>Confirm Email</Form.Label>
                    <Form.Control onChange={handleChange} type="email" required value={buyer.c_email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={handleChange} type="text" required value={buyer.phoneNumber} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="streetAddress">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control onChange={handleChange} type="text" required value={buyer.streetAddress} />
                </Form.Group>

                <Container className="text-center p-1">
                    <Button variant="success" type="submit">Confirm Checkout</Button>
                </Container>

            </Form>
        </Row>
    )
}

export default CheckoutForm