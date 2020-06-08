import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MidiumBanner extends Component {
    state = {}
    render() {
        return (
            <section className="midium-banner">
                <div className="container">
                    <div className="row">
                        {/* Single Banner  */}
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="https://via.placeholder.com/600x370" alt="#" />
                                <div className="content">
                                    <p>Man's Collectons</p>
                                    <h3>Man's items <br />Up to<span> 50%</span></h3>
                                    <Link to="manshop">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        {/* /End Single Banner  */}
                        {/* Single Banner  */}
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="https://via.placeholder.com/600x370" alt="#" />
                                <div className="content">
                                    <p>shoes women</p>
                                    <h3>mid season <br /> up to <span>70%</span></h3>
                                    <Link to="womanshop" className="btn">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        {/* /End Single Banner  */}
                    </div>
                </div>
            </section>
        );
    }
}

export default MidiumBanner;