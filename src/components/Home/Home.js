import React from 'react';
import fakeData from '../../fakeData/fakeData';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    return (
            <div className="container row pb-5 mb-5 mt-5 productContainer">
                {
                    fakeData.map(product => <Products product={product} ></Products>)
                }
            </div>
        
    );
};

export default Home;