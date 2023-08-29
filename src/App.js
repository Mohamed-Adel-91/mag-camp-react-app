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
import Sign from "./components/SignPage/sign.jsx";
import Login from "./components/SignPage/Login.jsx";
import Names from "./components/SignPage/names.jsx";
import Loop from "./components/SignPage/Loop.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Sign isSign={true} />
            <Login />
            <Names />
            <Loop />
            <NavLink>
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Products">Products</Link>
            </NavLink>
            <Routes>
                <Route
                    path="/Home"
                    element={
                        <Home name="Mohamed Adel" img="images/gitScreen.jpg" />
                    }
                />
                <Route path="/About" element={<About />} />
                <Route path="/Products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
