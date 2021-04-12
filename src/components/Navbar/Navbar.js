import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid  ms-5">
                    <a className="navbar-brand" href="/">Easy Express</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-5 ps-5" id="navbarNav">
                        <ul className="navbarUl navbar-nav ms-5 ps-5 ">
                            <li className="nav-item ms-5 ps-5">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item ms-5 ps-5">
                                <a className="nav-link active" aria-current="page" href="/">Orders</a>
                            </li>
                            <li className="nav-item ms-5 ps-5">
                                <a className="nav-link active" aria-current="page" href="/">Admin</a>
                            </li>
                            <li className="nav-item ms-5 ps-5">
                                <a className="nav-link active" aria-current="page" href="/">Deals</a>
                            </li>
                            
                                <Link to="/login">
                                    <button className='btn btn-primary ms-5'>Login</button>
                                </Link>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;