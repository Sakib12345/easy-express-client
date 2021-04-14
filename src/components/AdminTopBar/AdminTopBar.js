import React from 'react';
import { Link } from 'react-router-dom';

const AdminTopBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <Link to="/addProduct">
                                <button className='btn btn-success'>Add Product</button>
                            </Link>
                            <Link to="/manageProduct">
                                <button className='btn btn-primary ms-5'>Manage Product</button>
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default AdminTopBar;