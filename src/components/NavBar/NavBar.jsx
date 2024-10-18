import { Container } from 'react-bootstrap'

import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { getCategories } from '../../data/data.js'

import CartWidget from './CartWidget'
import Loading from '../Loading/Loading'

import './navbar.css'
const NavBar = ({ brand }) => {

    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        setLoading(true)
        getCategories()
            .then((data) => {
                setCategories(data)
            })
            .catch((error) => {

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
                <div className="collapse navbar-collapse justify-content-center">
                    {
                        loading === true ?
                            <Loading />
                            :
                            <ul className="navbar-nav mr-auto text-center align-items-center">
                                {
                                    categories.map((item, index) => {
                                        return (
                                            <li key={index} className="nav-item m-1">
                                                <NavLink to={`/category/${item.id}`} className="nav-link">{item.name}</NavLink>
                                            </li>
                                        )
                                    })
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