import { Row, Col, Button } from "react-bootstrap"

const CartItem = ({ item, formatNumber, changeQuantity, removeItem }) => {
    return (
        <Row className="mb-1" >
            <Col className="col col-lg-1 col-md-2">
                <img src={item.image.url} alt={item.image.alt} className="img-thumbnail" />
            </Col>
            <Col className="d-flex align-items-center justify-content-start">
                {item.name}
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
                ${formatNumber(item.price)}
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
                {
                    item.stock > 1
                        ?
                        <>
                            <Button variant="outline-success" className="btn-sm" onClick={() => changeQuantity(item, "-")}>-</Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button variant="outline-success" className="btn-sm" onClick={() => changeQuantity(item, "+")}>+</Button>
                        </>
                        :
                        <>
                            <span className="mx-2">Last available...</span>
                        </>
                }
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
                ${formatNumber(item.subtotal)}
            </Col>
            <Col className="col-1 d-flex align-items-center justify-content-end">
                <Button variant="outline-danger" className="btn-sm" onClick={() => removeItem(item)}>X</Button>
            </Col>
        </Row>
    )
}

export default CartItem