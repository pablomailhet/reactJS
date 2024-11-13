import { Row, Col } from "react-bootstrap"

import './checkoutitem.css'

const CheckoutItem = ({ item, formatNumber }) => {
    return (
        <Row className="mb-2" >
            <Col className="col col-lg-1 col-md-2">
                <img src={item.image.url} alt={item.image.alt} className="img-thumbnail rounded-circle" />
            </Col>
            <Col className="d-flex align-items-center justify-content-start itemCheckoutText">
                {item.name}
            </Col>
            <Col className="d-flex align-items-center justify-content-end itemCheckoutText">
                ${formatNumber(item.price)}
            </Col>
            <Col className="d-flex align-items-center justify-content-end itemCheckoutText">
                {item.quantity}
            </Col>
            <Col className="d-flex align-items-center justify-content-end itemCheckoutText">
                ${formatNumber(item.subtotal)}
            </Col>
        </Row>
    )
}

export default CheckoutItem