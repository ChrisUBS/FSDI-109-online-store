import { useState } from "react";
import DataContext from "./dataContext";

function GlobalProvider(props) {
    
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: "Chris"});

    function addProductToCart(product) {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item._id === product._id);
    
            if (existingItem) {
                // If product exists, update its quantity
                return prevCart.map(item =>
                    item._id === product._id 
                        ? { ...item, quantity: item.quantity + product.quantity } 
                        : item
                );
            } else {
                // If product is not in the cart, add it
                return [...prevCart, product];
            }
        });
    }

    function removeProductFromCart() {

    }

    function clearCart() {

    }
    
    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;