import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav-css">
                <div class="container-fluid">
                    <Link to="/" className="nav-link active">
                        <img
                            src="/icon-biscoff-bakery.png"
                            alt=""
                            width="60"
                            height="100%"
                            class="d-inline-block align-text-top"
                        />
                        <p className="nav-link disabled float-end logo-name">
                            Biscoff Bakery
                        </p>
                    </Link>

                    <div className="" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex ">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">
                                    Baked Goods
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
