import { Container } from 'react-bootstrap'

import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

import CartWidget from './CartWidget'

import Loading from '../Loading/Loading'
import LoadingSkeleton from '../Loading/LoadingSkeleton'

import { collectionCategories } from '../../db/db.js'

import { getDocs } from 'firebase/firestore'

import './navbar.css'
const NavBar = ({ brand }) => {

    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        setLoading(true)

        const promiseQuery = getDocs(collectionCategories)

        promiseQuery
            .then((response) => {
                const newCategories = response.docs.map(reference => (
                    { id: reference.id, ...reference.data() }
                ))
                setCategories(newCategories)
            })
            .catch((err) => {
                setCategories([])
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <Container fluid as="header">
            <nav className="navbar navbar-expand-lg">

                <Link to="/" className="navbar-brand">
                    <h1 className="title">{brand}</h1>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarApp" aria-controls="navbarApp" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarApp">
                    {
                        loading
                            ?
                            <LoadingSkeleton />
                            :
                            <ul className="navbar-nav mr-auto text-center align-items-center">
                                {
                                    categories.map((item, index) => (
                                        <li key={index} className="nav-item m-1">
                                            <NavLink to={`/category/${item.tag}`} className="nav-link">{item.name}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                    }
                </div>

                <CartWidget />

            </nav>
            
        </Container >
    )
}
export default NavBar