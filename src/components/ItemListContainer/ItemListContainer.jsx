import { Container, Row, Alert } from 'react-bootstrap'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../Loading/Loading'
import ItemList from './ItemList'

import { getProducts } from '../../data/data.js'

const ItemListContainer = ({ title }) => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((data) => {
                if (categoryId) {
                    const filterProducts = data.filter((product) => product.categoryId === categoryId)
                    setProducts(filterProducts)
                }
                else {
                    setProducts(data)
                }
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <Container className="text-center p-3" as="main">
            <Row className="justify-content-center">
                {
                    loading === true ?
                        <Loading />
                        :
                        error === "" ?
                            products.length > 0 ?
                                <>
                                    {title && <h2>{title}</h2>}
                                    <ItemList products={products} />
                                </>
                                :
                                <Alert variant="warning">
                                    No hay productos para mostrar.
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
export default ItemListContainer