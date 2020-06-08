import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                    {/* Footer Top */}
                    <div className="footer-top section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-6">
                                    {/* Single Widget */}
                                    <div className="single-footer about">
                                        <div className="logo">
                                            <a href="index.html"><img src="images/logo2.png" alt="#" /></a>
                                        </div>
                                        <p className="call">Got Question? Mail us now!<span><a href="tel:123456789">tynxcode.js@gmail.com</a></span></p>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    {/* Single Widget */}
                                    <div className="single-footer links">
                                        <h4>Information</h4>
                                        <ul>
                                            <li><a href="abc">About Us</a></li>
                                            <li><a href="abc">Contact Us</a></li>
                                            <li><a href="abc">Help</a></li>
                                        </ul>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    {/* Single Widget */}
                                    <div className="single-footer links">
                                        <h4>Customer Service</h4>
                                        <ul>
                                            <li><a href="abc">Payment Methods</a></li>
                                            <li><a href="abc">Money-back</a></li>
                                            <li><a href="abc">Returns</a></li>
                                        </ul>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    {/* Single Widget */}
                                    <div className="single-footer social">
                                        <h4>Contact Me</h4>
                                        {/* Single Widget */}
                                        <div className="contact">
                                            <ul>
                                                <li>Ea Tam - BMT City</li>
                                                <li>DakLak - Viet Nam</li>
                                                <li>tynxcode.js@gmail.com</li>
                                            </ul>
                                        </div>
                                        {/* End Single Widget */}
                                        <ul>
                                            <li><a href="abc"><i className="ti-facebook" /></a></li>
                                            <li><a href="abc"><i className="ti-twitter" /></a></li>
                                            <li><a href="abc"><i className="ti-flickr" /></a></li>
                                            <li><a href="abc"><i className="ti-instagram" /></a></li>
                                        </ul>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Footer Top */}
                </footer>

        );
    }
}

export default Footer;