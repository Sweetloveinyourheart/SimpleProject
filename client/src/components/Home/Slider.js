import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Slider extends Component {
    render() {
        return (
            <section className="hero-slider" style={{paddingTop: "50px"}}>
                    {/* Single Slider */}
                    <div className="single-slider">
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="col-lg-9 col-12">
                                    <div className="text-inner">
                                        <div className="row">
                                            <div className="col-lg-7 col-12">
                                                <div className="hero-text">
                                                    <h1><span>Welcome to </span>Sweet Shop</h1>
                                                    <p>Maboriosam in a nesciung eget magnae <br /> dapibus disting tloctio in the find it pereri <br /> odiy maboriosm.</p>
                                                    <div className="button">
                                                        <Link to="/shop" className="btn">Shop Now!</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ End Single Slider */}
                </section>
        );
    }
}

export default Slider;