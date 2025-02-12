import './cart.css';

function Cart() {
    return (
        <div className="container">
            <h1>Cart</h1>
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h3>Cart Items</h3>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img
                                                src="https://via.placeholder.com/150"
                                                alt="Product"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <h4>Product Name</h4>
                                            <p>Product Description</p>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <button className="btn btn-primary">+</button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button className="btn btn-danger">-</button>
                                                </div>
                                            </div>
                                            <p>Quantity: 2</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3>Cart Summary</h3>
                            <p>Subtotal: $100</p>
                            <p>Tax: $10</p>
                            <p>Total: $110</p>
                            <button className="btn btn-success">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;