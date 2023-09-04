import React from "react";

const products = () => {
    function handleSubmit() {
        alert("Handle Event is ok for button one ...!!");
    }
    function handleSubmit2(e) {
        e.preventDefault();
        alert("Handle Event is ok for button two ...!!");
    }
    const clickName2 = (name) => {
        alert("I am " + name);
    };
    return (
        <div>
            <h1>products</h1>
            <button onClick={handleSubmit}>one</button>
            <form onSubmit={handleSubmit2}>
                <button>two</button>
            </form>
            <button onClick={() => clickName2("Mohamed Adel")}>three</button>
        </div>
    );
};

export default products;
