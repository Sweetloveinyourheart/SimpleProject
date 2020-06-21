import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Banner extends Component {
    render() {
        return (
            <section className="small-banner section">
                    <div className="container-fluid">
                        <div className="row">
                            {/* Single Banner  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="single-banner">
                                    <img src="/images/Home/Banner_01.jpg" alt="#" />
                                    <div className="content">
                                        <p>Man's Collectons</p>
                                        <h3>Summer travel <br /> collection</h3>
                                        <Link to="#">Discover Now</Link>
                                    </div>
                                </div>
                            </div>
                            {/* /End Single Banner  */}
                            {/* Single Banner  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="single-banner">
                                    <img src="/images/Home/Banner_02.jpg" alt="#" />
                                    <div className="content">
                                        <p>Bag Collectons</p>
                                        <h3>Awesome Bag <br /> 2020</h3>
                                        <Link to="#">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                            {/* /End Single Banner  */}
                            {/* Single Banner  */}
                            <div className="col-lg-4 col-12">
                                <div className="single-banner tab-height">
                                    <img src="/images/Home/Banner_03.jpg" alt="#" />
                                    <div className="content">
                                        <p>Flash Sale</p>
                                        <h3>Mid Season <br /> Up to <span>40%</span> Off</h3>
                                        <Link to="#">Discover Now</Link>
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

export default Banner;