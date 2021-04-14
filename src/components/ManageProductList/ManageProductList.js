import React from 'react';
import { useHistory } from 'react-router';

const ManageProductList = (props) => {

    const { _id, title, quantity, price } = props.prd;

    const history = useHistory();

    const handleDelete = (e) => {
        fetch(`https://shielded-peak-13203.herokuapp.com/deleteProduct/${_id}`,{
            method: 'DELETE'
        })
        .then(response => response.json)
        .then(data => {
            alert('Product deleted successfully');
            history.replace('/manageProduct')
        })
    }

    return (
        <tr>
            <td>{title}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td> <button onClick={handleDelete} className="btn btn-danger">Delete</button> </td>
        </tr>
    );
};

export default ManageProductList;