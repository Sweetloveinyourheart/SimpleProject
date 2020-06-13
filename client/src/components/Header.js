import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header shop sticky">
                {/* Header Inner */}
                <div className="header-inner">
                    <div className="container">
                        <div className="cat-nav-head">
                            <div className="row">
                            <div className="col-lg-3 col-md-2 col-12">
                                {/* Logo */}
                                <div className="logo">
                                    <Link to="/"><img src="/images/logo.png" alt="logo" /></Link>
                                </div>
                                {/*/ End Logo */}
                                <div className="mobile-nav" />
                            </div>
                                
                                <div className="col-lg-7 col-12">
                                    <div className="menu-area">
                                        {/* Main Menu */}
                                        <nav className="navbar navbar-expand-lg">
                                            <div className="navbar-collapse">
                                                <div className="nav-inner">
                                                    <ul className="nav main-menu menu navbar-nav">
                                                        <li ><NavLink to="/">Home</NavLink></li>
                                                        <li><NavLink to="/shop">Shop<i className="ti-angle-down" /><span className="new">New</span></NavLink>
                                                            <ul className="dropdown">
                                                                <li><Link to="/manshop">Man's Shop</Link></li>
                                                                <li><Link to="woman">Woman's Shop</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><NavLink to="/blog">Blog</NavLink></li>
                                                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                        {/*/ End Main Menu */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Header Inner */}
                
            </header>

        );
    }
}

export default Header;