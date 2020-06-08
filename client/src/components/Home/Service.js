import React, { Component } from 'react';

class Service extends Component {
    state = {}
    render() {
        return (
            <section className="shop-services section home" style={{ marginTop: '50px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-6">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-rocket" />
                                <h4>Free shiping</h4>
                                <p>Orders over $100</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-reload" />
                                <h4>Free Return</h4>
                                <p>Within 30 days returns</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-lock" />
                                <h4>Sucure Payment</h4>
                                <p>100% secure payment</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-tag" />
                                <h4>Best Peice</h4>
                                <p>Guaranteed price</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Service;