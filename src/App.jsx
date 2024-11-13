import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'

import { CartProvider } from './context/CartContext'
import { ToastContainer, Zoom } from 'react-toastify'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <ToastContainer
                    theme="dark"
                    autoClose={1500}
                    transition={Zoom}
                    hideProgressBar={true}
                    className="toast-container" />
                <NavBar brand={"RCParts"} />
                <Routes>
                    <Route path="/" element={<ItemListContainer title="All Items" />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer title="" />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<Navigate replace to='/' />} />
                </Routes>
                <Footer />
            </CartProvider>
        </BrowserRouter>
    )
}

export default App