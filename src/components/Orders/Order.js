import React, { useEffect, useState } from 'react';
import TotalOrders from '../TotalOrders/TotalOrders';

const Order = () => {

    const [orders, setOrders] = useState([]);
    const user = JSON.parse(localStorage.getItem('user')) || {};

    useEffect(() => {
        fetch(`https://shielded-peak-13203.herokuapp.com/orders?email=${user.email}`)
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [user.email])

    return (
        <div className="container">
            <h2 className="mb-5">Your Total Orders</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.map(order => <TotalOrders key={order._id} order={order}></TotalOrders>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default Order;