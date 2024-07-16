import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Products from './components/Products';
import About from './components/About';
import Home from './components/Home';
import Singleproduct from './components/Singleproduct';


const router = createBrowserRouter([
    {
        path:"",
        element:<App />,
        children:[
            {
                path:"/home",
                element:<Home />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/products",
                element:<Products />
            },
            {
                path:"/singleproduct/:id",
                element:<Singleproduct />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
