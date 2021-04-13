import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [products])

    return (
            <div className="container row pb-5 mb-5 mt-5 productContainer">
                {
                    products.map(product => <Products key={product._id} product={product} ></Products>)
                }
            </div>
        
    );
};

export default Home;