import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Checkout = () => {

    const {id} = useParams();
    
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data))
    },[id]);

    const {title, quantity, price} = product;

    return (
        <div>
            <div className="container mt-5">
            <h2 className="mb-5">Checkout</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{title}</td>
                        <td>{quantity}</td>
                        <td>${price}</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><b>Total</b></td>
                        <td>${price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Checkout;