// import logo from './logo.svg';
import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Catalog from './pages/catalog';
import Cart from './pages/cart';
import Admin from './pages/admin';
import About from './pages/about';
import Footer from './components/footer';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />

                <Router>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/catalog" element={<Catalog />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/admin" element={<Admin />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                </Router>

                <Footer />
            </div >
        </BrowserRouter>
    );
}

export default App;
