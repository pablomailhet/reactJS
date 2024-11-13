import { Container, Alert, Button, Row, Col } from "react-bootstrap"

import { useState, useContext } from "react"
import { Link } from "react-router-dom"

import { CartContext } from "../../context/CartContext"

import { formatNumber } from "../../utils/format.js"
import validateForm from '../../utils/validateForm.js'
import Swal from 'sweetalert2'

import { collectionOrders } from '../../db/db.js'
import { addDoc, serverTimestamp } from "firebase/firestore"

import Loading from '../Loading/Loading'
import CheckoutItem from "./CheckoutItem"
import CheckoutForm from './CheckoutForm'
import CartEmpty from '../Cart/CartEmpty'

const Checkout = () => {

    const { items, getTotal, clearItems } = useContext(CartContext)

    const [loading, setLoading] = useState(false)
    const [idOrder, setIdOrder] = useState("")
    const [error, setError] = useState("")

    const onSubmit = (buyer) => {

        const validationResult = validateForm(buyer)

        if (validationResult.status === 'success') {

            setLoading(true)

            const { c_email, ...newBuyer } = buyer

            const order = {
                buyer: { ...newBuyer },
                items: [...items],
                date: serverTimestamp(),
                total: getTotal(),
                status: "created"
            }

            const promiseDocument = addDoc(collectionOrders, order)

            promiseDocument
                .then(result => {
                    setError("")
                    setIdOrder(result.id)
                    clearItems()
                })
                .catch(err => {
                    setError(err)
                })
                .finally(() => {
                    setLoading(false)
                })

        }
        else {
            Swal.fire({
                icon: "error",
                title: validationResult.message,
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-secondary',
                }
            })
        }

    }

    return (
        <Container className="p-3" as="main">
            {
                loading
                    ?
                    <Loading />
                    :
                    error === ""
                        ?
                        idOrder === ""
                            ?
                            items.length > 0
                                ?
                                <>
                                    <Container className="border rounded p-2 mb-3">
                                        <h2 className="text-center fs-3 text-muted">Order Summary</h2>
                                        {
                                            items.map((item) => (
                                                <CheckoutItem key={item.id} item={item} formatNumber={formatNumber} />
                                            ))
                                        }
                                        <Row>
                                            <Col className="d-flex align-items-center justify-content-end">
                                                Order Total: ${formatNumber(getTotal())}
                                            </Col>
                                        </Row>
                                    </Container>
                                    <Container className="border rounded p-2 mb-3">
                                        <CheckoutForm onSubmit={onSubmit} />
                                    </Container>
                                </>
                                :
                                <CartEmpty />
                            :
                            <Alert className="text-center" variant="success">
                                <p>Thank you for your purchase!</p>
                                <p>Your order number is: <span className="fw-bold">{idOrder}</span></p>
                                <p>You will receive an email shortly with the details of your order and a link to complete your payment.</p>
                                <Link to="/">
                                    <Button variant="success">Continue Shopping</Button>
                                </Link>
                            </Alert>
                        :
                        <Alert variant="danger">
                            An error occurred ({error}) <Link to={"/cart"}>go to cart</Link>
                        </Alert>
            }
        </Container>

    )
}

export default Checkout