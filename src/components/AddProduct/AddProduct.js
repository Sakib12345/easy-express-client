import React, { useState } from 'react';
import { useHistory } from 'react-router';
import AdminTopBar from '../AdminTopBar/AdminTopBar';

const AddProduct = () => {

    const history = useHistory();

    const [product, setproduct] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/addProduct`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        })
        .then(response => response.json)
        .then(data => {
            alert('Product added successfully')
            history.replace('/')
        })
    }
    const handleOnBlur = (e) => {
        const newProduct = product;
        newProduct[e.target.name] = e.target.value;
        setproduct(newProduct)
    }

    return (
        <div>
            <AdminTopBar></AdminTopBar>
            <div className="container col-md-8">
                <h2 className="m-5 text-center">Add Product</h2>
                <form onSubmit={handleSubmit} >
                    <input className='form-control' onBlur={handleOnBlur} type="text" name="title" placeholder="Enter Name" required/><br/><br/>
                    <input className='form-control' onBlur={handleOnBlur}  type="text" name="quantity" placeholder="Enter Quantity" required/><br/><br/>
                    <input className='form-control' onBlur={handleOnBlur}  type="text" name="price" placeholder="Enter Price" required/><br/><br/>
                    <input className='form-control' onBlur={handleOnBlur}  type="text" name="image" placeholder="Image URL" required/><br/><br/>
                    <button className='btn btn-success'>Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;