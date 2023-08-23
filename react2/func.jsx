import React from 'react';
// import {createRoot} from 'react-dom/client';

const is_log = (is_open)=>{
    if(is_open){
        return <p className='title'> Online Suparmarket</p>
    }else{
        return <p className='title'> Suparmarket(closed) </p>
    }
}

console.log(is_log(true));
console.log(is_log(false));