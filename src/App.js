import React from "react";
import Home from "./HomePage/home.jsx";
import About from "./AboutPage/about.jsx";

const App = () => {
    return (
        <div>
            <Home name="Mohamed Adel" img="images\gitscreen.jpg" />
            <About />
        </div>
    );
};

export default App;
