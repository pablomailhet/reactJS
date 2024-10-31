import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'

import './App.css'
function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar brand={"RC Parts"} />
                <Routes>
                    <Route path="/" element={<ItemListContainer title={"All Products"} />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer title={""} />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<Navigate replace to='/' />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default App