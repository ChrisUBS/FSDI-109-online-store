import { useContext } from 'react';
import './cart.css';
import DataContext from '../state/dataContext';

function Cart() {
    const { cart, setCart } = useContext(DataContext);

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
                    <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={item.image} alt={item.title} width="50" className="me-3"/>
                            <div>
                                <h5>{item.title}</h5>
                                <p>Sub-total: ${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
                            </div>
                        </div>
                        <button className="btn btn-danger">Delete</button>
                    </li>
                ))}
            </ul>

            <div className="mt-3">
                <h4>Total: <strong>${getTotalPrice()}</strong></h4>
            </div>
        </div>
    );
}

export default Cart;
