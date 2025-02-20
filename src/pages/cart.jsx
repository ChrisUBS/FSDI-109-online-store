import { useContext } from 'react';
import './cart.css';
import DataContext from '../state/dataContext';
import ProductInCart from '../components/productInCart';

function Cart() {
    const { cart, removeProductFromCart, clearCart } = useContext(DataContext); // Use removeProductFromCart

    function getTotalItems() {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    function getTotalPrice() {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    }

    return (
        <div className="cart page container">
            <h1 className='text-success'>Cart</h1>
            <div className="row">
                <h3>We have <strong>{getTotalItems()}</strong> products in the cart</h3>
            </div>

            <ul className="list-group">
                {cart.map((item) => (
                    <ProductInCart key={item._id} product={item} />
                ))}
            </ul>

            <div className="mt-3">
                <h4>Total: <strong>${getTotalPrice()}</strong></h4>
            </div>
            <div className="mt-3">
                {cart.length > 0 && ( // Show only if cart is not empty
                    <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
                )}
            </div>
        </div>
    );
}

export default Cart;
