import React from 'react';
import {createRoot} from 'react-dom/client';
const element = React.createElement("h1", {className: "title"}, "Online Supermarket");
const root = document.querySelector("#react-root");
createRoot(root).render(element);