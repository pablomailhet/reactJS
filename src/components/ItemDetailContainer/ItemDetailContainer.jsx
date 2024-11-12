import { Container, Row, Alert } from 'react-bootstrap'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../Loading/Loading'
import ItemDetail from '../ItemDetail/ItemDetail'

import { collectionItems } from '../../db/db.js'
import { doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(undefined)
    const [error, setError] = useState("")

    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        const documentReference = doc(collectionItems, itemId)

        getDoc(documentReference)
            .then((response) => {
                response.exists() ? setItem({ id: response.id, ...response.data() }) : setItem(undefined)
            })
            .catch((err) => {
                setError(err)
                setItem(undefined)
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
                            item !== undefined ?
                                <ItemDetail item={item} />
                                :
                                <Alert variant="warning">
                                    Sorry, the item you are looking for is not available.
                                </Alert>
                            :
                            <Alert variant="danger">
                                Error ({error})
                            </Alert>
                }
            </Row>
        </Container>
    )
}

export default ItemDetailContainer