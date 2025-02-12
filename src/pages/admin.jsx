import './admin.css';

function Admin() {
    return (
        <div className="admin page">
            <h1>Store administration</h1>
            <div className="admin-container d-flex justify-content-around">
                <div className='register col-7'>
                    <h3>Register new product</h3>

                    <form>
                        <div className="form-group">
                            <label htmlFor="product-name">Product name</label>
                            <input type="text" className="form-control" id="product-name" placeholder="Enter product name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-price">Product price</label>
                            <input type="number" className="form-control" id="product-price" placeholder="Enter product price" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-image">Product image</label>
                            <input type="text" className="form-control" id="product-image" placeholder="Enter product image" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-category">Product category</label>
                            <input type="text" className="form-control" id="product-category" placeholder="Enter product category" />
                        </div>

                        <div className='justify-content-center d-flex'>
                            <button type="submit" className="btn btn-dark">Save Product</button>
                        </div>
                    </form>
                </div>

                <div className='coupons col-4'>
                    <h3>Coupon Codes</h3>

                    <form>
                        <div className="form-group">
                            <label htmlFor="code">Code</label>
                            <input type="text" className="form-control" id="code" placeholder="Enter code" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="discount">Discount</label>
                            <input type="number" className="form-control" id="discount" placeholder="Enter discount" />
                        </div>

                        <div className='justify-content-center d-flex'>
                            <button type="submit" className="btn btn-dark">Save Coupon</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Admin;
