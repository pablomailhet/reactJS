import { Container, Row, Col, Button } from "react-bootstrap"
import React from 'react'

import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import CartEmpty from "./CartEmpty"

import CartItem from "./CartItem"

const Cart = () => {

    const { items, removeItem, clearItems, getTotal, changeQuantity } = useContext(CartContext)

    const formatNumber = (number) => {
        return number.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }

    if (items.length === 0) {
        return (
            <CartEmpty />
        )
    }

    return (
        <Container className="text-center p-3" as="main">
            <h2>Products added to cart</h2>
            {
                items.map((item) => (
                    <CartItem key={item.id} item={item} formatNumber={formatNumber} changeQuantity={changeQuantity} removeItem={removeItem} />
                ))
            }
            <Row>
                <Col className="d-flex align-items-center justify-content-start">
                    Total
                </Col>
                <Col className="col-9 d-flex align-items-center justify-content-end">
                    ${formatNumber(getTotal())}
                </Col>
                <Col className="col-1 d-flex align-items-center justify-content-end">
                    <Button variant="outline-danger" size="sm" onClick={clearItems} >X</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart