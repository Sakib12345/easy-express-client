import React, { useEffect, useState } from 'react';
import AdminTopBar from '../AdminTopBar/AdminTopBar';
import ManageProductList from '../ManageProductList/ManageProductList';

const ManageProduct = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('https://shielded-peak-13203.herokuapp.com/products')
        .then(response => response.json())
        .then(data => setAllProducts(data))
    },[])

    return (
        
        <div>
            <AdminTopBar></AdminTopBar>
            <div className="container">
            <h2 className="mb-5">Manage Product</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    allProducts.map(prd => <ManageProductList key={prd._id} prd={prd} ></ManageProductList>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageProduct;