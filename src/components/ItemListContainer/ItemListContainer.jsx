import { Container, Row, Alert } from 'react-bootstrap'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../Loading/Loading'
import ItemList from './ItemList'

import { collectionItems } from '../../db/db.js'
import { getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({ title }) => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const [error, setError] = useState("")

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const promiseQuery = getDocs(categoryId ? query(collectionItems, where("categoryId", "==", categoryId)) : collectionItems)

        promiseQuery
            .then((response) => {
                const newItems = response.docs.map(reference => (
                    { id: reference.id, ...reference.data() }
                ))
                setError("")
                setItems(newItems)
            })
            .catch((err) => {
                setError(err)
                setItems([])
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
                            items.length > 0 ?
                                <>
                                    {title && <h2>{title}</h2>}
                                    <ItemList items={items} />
                                </>
                                :
                                <Alert variant="warning">
                                    Sorry, there are no items in this category right now.
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