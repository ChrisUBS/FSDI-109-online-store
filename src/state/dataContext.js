import { createContext } from "react";

/**
 * It's a promise of the data structure
 * interface
 * blueprint
 */

const DataContext = createContext({
    cart : [],
    user: {},

    addProductToCart: () => {},
    removeProductFromCart: () => {},
    clearCart: () => {}
});

export default DataContext;