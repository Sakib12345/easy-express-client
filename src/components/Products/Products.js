import React from 'react';
import './Products.css'

const Products = (props) => {
    const { title, quantity, price, image } = props.product;
    return (
        <div className="col-lg-4 col-md-6 mb-5 pb-5 mb-lg-0 ">
            <div className="card rounded shadow-sm border-0 cardDesign h-100">
                <img src={image} className="card-img-top cardImage" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p>{quantity}</p>
                        <h5>${price}</h5>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
            </div>
        </div>
    );
};

export default Products;