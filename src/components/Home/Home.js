import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://shielded-peak-13203.herokuapp.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

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