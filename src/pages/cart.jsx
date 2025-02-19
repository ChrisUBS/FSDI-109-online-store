import { useContext } from 'react';
import './cart.css';
import DataContext from '../state/dataContext';

function Cart() {

    const cart = useContext(DataContext).cart;

    function getTheCart() {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    return (
        <div className="cart page container">
            <h1 className='text-success'>Cart</h1>
            <div className="row">
                <h3>We have <strong>{getTheCart()}</strong> products in the cart</h3>
            </div>
        </div>
    );
}

export default Cart;

/**
 * render a H3 with something like:
 * we have X products in the cart
 * 
 * where X is the number of products.
 * 
 * Connect to the context (remember the 2 imports)
 * get the cart
 * create a function that calculates the number of products
 * 
 * call the fn from the H3
 * 
 */