import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])

    const addItem = (item, quantity) => {

        const newItems = [...items]
        const itemIndex = isInCart(item.id)
        if (itemIndex >= 0) {
            newItems[itemIndex].quantity += quantity
            newItems[itemIndex].subtotal = newItems[itemIndex].price * newItems[itemIndex].quantity
        }
        else {
            const newItem = { ...item }
            newItem.quantity = quantity
            newItem.subtotal = newItem.price * quantity
            newItems.push(newItem)
        }
        localStorage.setItem("cartItems",JSON.stringify(newItems))
        setItems(newItems)

    }

    const removeItem = (item) => {
        const itemIndex = isInCart(item.id)
        if (itemIndex >= 0) {
            const newItems = [...items]
            newItems.splice(itemIndex, 1)
            localStorage.setItem("cartItems",JSON.stringify(newItems))
            setItems(newItems)
        }
    }

    const changeQuantity = (item, operator) => {
        const itemIndex = isInCart(item.id)
        if (itemIndex >= 0) {
            const newItems = [...items]
            if (operator === "+") {
                if (newItems[itemIndex].quantity < newItems[itemIndex].stock) {
                    newItems[itemIndex].quantity++
                }
            }
            if (operator === "-") {
                if (newItems[itemIndex].quantity > 1) {
                    newItems[itemIndex].quantity--
                }
            }
            newItems[itemIndex].subtotal = newItems[itemIndex].price * newItems[itemIndex].quantity
            localStorage.setItem("cartItems",JSON.stringify(newItems))
            setItems(newItems)
        }
    }

    const isInCart = (id) => items.findIndex(itemCart => itemCart.id === id)

    const clearItems = () => {
        localStorage.setItem("cartItems",JSON.stringify([]))
        setItems([])
    }

    const getQuantityOfItemInCart = (item) => {
        const itemCart = items.find(itemCart => itemCart.id === item.id)
        return itemCart ? itemCart.quantity : 0
    }

    const getQuantityTotal = () => {
        return items.reduce((acc, item) => item.quantity + acc, 0)
    }

    const getTotal = () => {
        return items.reduce((acc, item) => item.subtotal + acc, 0)
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clearItems, getQuantityOfItemInCart, getQuantityTotal, getTotal, changeQuantity }}>
            {children}
        </CartContext.Provider>
    )

}

export { CartContext, CartProvider }