import { useState } from 'react';
import './quantityPicker.css';

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(0);

    function increase() {
        setQuantity(quantity + 1);
        props.onChange(quantity + 1);
    }

    function decrease() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
        props.onChange(quantity - 1);
    }

    return (
        <div className="quantity-picker d-flex align-items-center">
            <button
                className={`btn btn-sm ${quantity === 0 ? 'btn-outline-secondary' : 'btn-outline-danger'}`}
                disabled={quantity === 0}
                onClick={decrease}
            >
                <strong>-</strong>
            </button>
            <label className="mx-2 mb-0">{quantity}</label>
            <button className="btn btn-sm btn-outline-success" onClick={increase}>
                <strong>+</strong>
            </button>
        </div>
    );
}

export default QuantityPicker;
