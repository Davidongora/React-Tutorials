import React from "react";
import {createRoot} from "react-dom/client";

// do not modify this function
function Navbar() {
    return (
        <>
            <h3>Supermarket</h3>
            <p>Start shopping</p>
        </>
    );
}

const root = document.querySelector("#react-root");
const element = React.createElement(Navbar);
createRoot(root).render(element);

// TODO:

