import React from "react";
import Home from "./HomePage/home.jsx";
import About from "./AboutPage/about.jsx";
import {
    BrowserRouter,
    Routes,
    Route,
    Router,
    Link,
    NavLink,
} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <NavLink>
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
            </NavLink>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
