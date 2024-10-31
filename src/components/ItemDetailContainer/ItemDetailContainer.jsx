import { Container, Row, Alert } from 'react-bootstrap'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../Loading/Loading'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

import { getProducts } from '../../data/data.js'

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const [error, setError] = useState("")

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((data) => {
                const findProduct = data.find((product) => product.id === parseInt(itemId))
                setProduct(findProduct)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <Container className="text-center p-3" as="main" fluid>
            <Row className="justify-content-center">
                {
                    loading === true ?
                        <Loading />
                        :
                        error === "" ?
                            product !== undefined ?
                                <ItemDetail product={product} />
                                :
                                <Alert variant="warning">
                                    Producto no encontrado.
                                </Alert>
                            :
                            <Alert variant="danger">
                                Error: {error}
                            </Alert>
                }
            </Row>
        </Container>
    )
}

export default ItemDetailContainer