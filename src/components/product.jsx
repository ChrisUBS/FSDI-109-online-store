import './product.css';
import QuantityPicker from './quantityPicker';

function Product(props) {

    function addToCart() {
        console.log('Adding to cart');
    }


    return (
        <div className="card product">
            <img
                src={props.data.image}
                className="card-img-top"
                alt="Product"
            />
            <div className="card-body text-center">
                <h5 className="card-title text-primary">{props.data.title}</h5>
                <p className="card-text text-muted">${props.data.price}</p>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <QuantityPicker />
                    <button className="btn btn-sm btn-success" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
