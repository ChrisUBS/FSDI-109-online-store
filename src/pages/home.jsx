import './home.css';
import { Link } from 'react-router-dom';
import bg_store from '../assets/background.jpg';

function Home() {
    return (
        <div className="home page">
            <img src={bg_store} alt="" />

            <div className="info">
                <h4>Welcome to Organika Store</h4>
                <h6>Fresh food, 1-click away!</h6>
            </div>

            <div className="controls">
                <Link to="/catalog" className="btn">Check Our Catalog!</Link>
            </div>

        </div>
    );
}

export default Home;

/**
 * 
 * Improve presentation:
 * - images
 * - text
 * 
 * a link to the catalog
 */