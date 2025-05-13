import { createContext, useContext, useState } from 'react';
import intialProducts from '../data/products';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [products]= useState(intialProducts);

    //Funcion para agregar al carrito  de compras
    const addToCart = (product) => {
        const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            // Si el producto ya existe, actualizamos la cantidad
            const updatedCart = [...cartItems];
            updatedCart[existingProductIndex].quantity += 1;
            setCartItems(updatedCart);
        } else {
            // Si no existe, lo agregamos con cantidad 1
            const newProduct = { ...product, quantity: 1 };
            setCartItems([...cartItems, newProduct]);
        }
    };

    const findSingleProduct = (id)=>{
        const product = products.find((element)=>element.id === id);
        return product
    }


    const removeFromCart = (id) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    };

    const calculateCartSubtotal = ()=>{
        const total = cartItems.reduce((accumulator, currentValue)=>accumulator+ (currentValue.price * currentValue.quantity), 0);
        return total;
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, products, findSingleProduct, calculateCartSubtotal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);