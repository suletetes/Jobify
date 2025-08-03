import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import customFetch from './utils/customFetch.js';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

const data = await customFetch.get('/test');
console.log(data);

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        <ToastContainer position='top-center'/>
    </React.StrictMode>
)

