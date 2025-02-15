import './catalog.css';
import Product from '../components/product';

const catalog = [
    {
        "title": "Orange",
        "image": "/images/orange.png",
        "price": 12.90,
        "category": "fruit",
        "_id": "1"
    },
    {
        "title": "Apple",
        "image": "/images/apple.png",
        "price": 10.90,
        "category": "fruit",
        "_id": "2"
    },
    {
        "title": "Banana",
        "image": "/images/banana.webp",
        "price": 8.90,
        "category": "fruit",
        "_id": "3"
    },
    {
        "title": "Carrot",
        "image": "/images/carrot.webp",
        "price": 5.90,
        "category": "vegetable",
        "_id": "4"
    },
    {
        "title": "Cucumber",
        "image": "/images/cucumber.png",
        "price": 6.90,
        "category": "vegetable",
        "_id": "5"
    },
    {
        "title": "Tomato",
        "image": "/images/tomato.webp",
        "price": 7.90,
        "category": "vegetable",
        "_id": "6"
    },
    {
        "title": "Milk",
        "image": "/images/milk.webp",
        "price": 3.90,
        "category": "dairy and eggs",
        "_id": "7"
    },
    {
        "title": "Egg",
        "image": "/images/egg.webp",
        "price": 2.90,
        "category": "dairy and eggs",
        "_id": "8"
    },
    {
        "title": "Butter",
        "image": "/images/butter.png",
        "price": 4.90,
        "category": "dairy and eggs",
        "_id": "9"
    },
    {
        "title": "Corn",
        "image": "/images/corn.webp",
        "price": 1.90,
        "category": "vegetable",
        "_id": "10"
    }
];

const categories = [];

function Catalog() {

    function displayCategories() {
        catalog.map(product => {
            if (!categories.includes(product.category)) {
                categories.push(product.category);
            }
        });
    }

    return (
        <div className="catalog page container mt-2">
            <h1 className="text-center mb-4 text-success">Check Out Our Fresh Catalog</h1>
            <div className="filters">
                {displayCategories()}
                {categories.map(category => (
                    <button className="btn btn-sm btn-outline-secondary mb-4 me-2">{category}</button>
                ))}
            </div>
            <div className="row g-4">
                {catalog.map(product => (
                    <div className="col-md-4 col-lg-3">
                        <Product data={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
