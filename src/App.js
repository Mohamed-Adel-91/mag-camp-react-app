import React from "react";
import Home from "./components/HomePage/home.jsx";
import About from "./components/AboutPage/about.jsx";
import Products from "./components/ProductsPage/products.jsx";
import {
    BrowserRouter,
    Routes,
    Route,
    // Router,
    Link,
    NavLink,
} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <NavLink>
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Products">Products</Link>
            </NavLink>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
