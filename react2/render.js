import React from'react';
import {createRoot} from 'react-dom/client';
const element = React.createElement('h1' , {} , 'online supermarket');
const root = document.querySelector('#react-root');
createRoot(root).render(element);
