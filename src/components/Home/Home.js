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

    // const all = () => {
    //     fetch('http://localhost:5000/addProducts', {
    //         method: 'POST',
    //         headers: {'Content-type':'application/json'},
    //         body: JSON.stringify(fakeData)
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }

    return (
            <div className="container row pb-5 mb-5 mt-5 productContainer">
                {/* <button onClick={all}>ADD ALL PRODUCTS</button> */}
                {
                    products.map(product => <Products key={product._id} product={product} ></Products>)
                }
            </div>
        
    );
};

export default Home;