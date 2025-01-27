import { Button } from "react-bootstrap"

import { useNavigate } from "react-router-dom"

const ItemEnd = () => {

    const navigate = useNavigate()

    return (
        <div className="d-flex justify-content-start">
            <div>
                <Button variant="secondary" size="sm" onClick={() => navigate(-1)}>Continue Shopping</Button>
            </div>
            <div className="ms-4">
                <Button variant="success" size="sm" onClick={() => navigate("/cart")}>Complete Purchase</Button>
            </div>
        </div>
    )

}

export default ItemEnd