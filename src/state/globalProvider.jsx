import { useState } from "react";
import DataContext from "./dataContext";

function GlobalProvider(props) {
    
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: "Chris"});

    function addProductToCart(product) {
        console.log("Global add");
        // 3 setps to push product into the cart array
        let copy = [...cart];
        copy.push(product);
        setCart(copy);
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