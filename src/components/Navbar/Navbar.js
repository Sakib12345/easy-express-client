import React from 'react';
import { Link } from 'react-router-dom';

const user = JSON.parse(localStorage.getItem('user')) || {};

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="/">Easy Express</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <Link to="/">
                                <button className='btn btn-default'>Home</button>
                            </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link to="/orders">
                                <button className='btn btn-default'>Orders</button>
                            </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link to="/addProduct">
                                <button className='btn btn-default'>Admin</button>
                            </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link to="/">
                                <button className='btn btn-default'>Deals</button>
                            </Link>
                        </li>
                        <li>
                            {
                                user.email ? `${user.name}` :
                                    <Link to="/login">
                                        {
                                            <button className='btn btn-primary me-5'>Login</button>
                                        }

                                    </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;