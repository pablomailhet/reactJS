import { Container, Row, Col, Button } from "react-bootstrap"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

import CartEmpty from "./CartEmpty"
import CartItem from "./CartItem"

import { formatNumber } from "../../utils/format.js"
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const Cart = () => {

    const { items, removeItem, clearItems, getTotal, changeQuantity } = useContext(CartContext)

    const handleClickRemoveItem = (item) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: 'Do you really want to remove this item from your cart?',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it',
            cancelButtonText: 'No, keep it',
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-secondary',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                toast.info(
                    <div className="toast-content">
                        <img src={item.image.url} alt={item.image.alt} className="toast-avatar" />
                        <span>Item removed from cart</span>
                    </div>
                    , { icon: false })
                removeItem(item)
            }
        })
    }

    const handleClickClearItems = () => {

        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: 'Do you really want to empty your entire cart?',
            showCancelButton: true,
            confirmButtonText: 'Yes, empty my cart',
            cancelButtonText: 'No, keep my items',
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-secondary',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                toast.info("All items have been removed from your cart")
                clearItems()
            }
        })

    }

    if (items.length === 0) {
        return (
            <CartEmpty />
        )
    }

    return (
        <Container className="text-center p-3" as="main">
            <h2 className="text-center fs-3">Items added to cart</h2>
            {
                items.map((item) => (
                    <CartItem key={item.id} item={item} formatNumber={formatNumber} changeQuantity={changeQuantity} removeItem={handleClickRemoveItem} />
                ))
            }
            <Row className="border border-success rounded p-2 mb-3">
                <Col className="d-flex align-items-center justify-content-start">
                    Total
                </Col>
                <Col className="col-9 d-flex align-items-center justify-content-end">
                    ${formatNumber(getTotal())}
                </Col>
                <Col className="col-1 d-flex align-items-center justify-content-end">
                    <Button variant="outline-danger" size="sm" onClick={handleClickClearItems} >X</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/checkout">
                        <Button variant="success">Checkout</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart