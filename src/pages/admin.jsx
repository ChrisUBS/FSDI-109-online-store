import './admin.css';
import { useState } from 'react';

function Admin() {

    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const [coupon, setCoupon] = useState({
        code: '',
        discount: 0
    });

    const [product, setProduct] = useState({
        title: '',
        price: 0,
        image: '',
        category: ''
    });

    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.name;
        console.log('text changed!', text, name);

        let copy = { ...product };
        copy[name] = text;
        setProduct(copy);
    }

    function saveProduct() {
        console.log('Product:', product);
        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
        console.log('All Products:', allProducts);
    }

    function handleCoupon(e) {
        const text = e.target.value;
        const name = e.target.name;
        console.log('text changed!', text, name);

        /**
         * 3 steps to modify Obj or Arrays in State vars:
         * - Create a copy
         * - Modify the copy
         * - Set the copy back
         */

        let copy = { ...coupon };
        copy[name] = text;
        setCoupon(copy);
    }

    function saveCoupon() {
        console.log('Coupon:', coupon);
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
        console.log('All Coupons:', allCoupons);
    }

    return (
        <div className="admin page">
            <h1>Store administration</h1>
            <div className="admin-container d-flex justify-content-around">
                <div className='register col-7'>
                    <h3>Register new product</h3>

                    <form>
                        <div className="form-group">
                            <label htmlFor="product-name">Product name</label>
                            <input type="text" className="form-control" id="product-name" placeholder="Enter product name" onBlur={handleProduct} name='title'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-price">Product price</label>
                            <input type="number" className="form-control" id="product-price" placeholder="Enter product price" onBlur={handleProduct} name='price'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-image">Product image</label>
                            <input type="text" className="form-control" id="product-image" placeholder="Enter product image" onBlur={handleProduct} name='image'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-category">Product category</label>
                            <input type="text" className="form-control" id="product-category" placeholder="Enter product category" onBlur={handleProduct} name='category'/>
                        </div>

                    </form>
                        <div className='justify-content-center d-flex'>
                            <button className="btn btn-dark" onClick={saveProduct}>Save Product</button>
                        </div>

                        {allProducts.map(pr => <li>{pr.title} - ${pr.price} - {pr.category}</li>)}
                </div>

                <div className='coupons col-4'>
                    <h3>Coupon Codes</h3>

                    <form>
                        <div className="form-group">
                            <label htmlFor="code">Code</label>
                            <input type="text" className="form-control" id="code" placeholder="Enter code" onBlur={handleCoupon} name='code'/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="discount">Discount</label>
                            <input type="number" className="form-control" id="discount" placeholder="Enter discount" onBlur={handleCoupon} name='discount'/>
                        </div>

                    </form>
                        <div className='justify-content-center d-flex'>
                            <button className="btn btn-dark" onClick={saveCoupon}>Save Coupon</button>
                        </div>

                        {allCoupons.map(cp => <li>{cp.code} - {cp.discount}%</li>)}

                </div>
            </div>
        </div>
    );
}

export default Admin;

/**
 * on click of the Save Coupon bn
 * call a saveCoupon fn
 * the fn should console log the coupon variable
 */