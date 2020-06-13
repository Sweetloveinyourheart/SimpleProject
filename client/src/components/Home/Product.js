import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="product-area section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Trending Item</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-info">
                                <div className="tab-content" id="myTabContent">
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade show active" id="man" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <button title="Quick View" ><i className=" ti-eye" /></button>
                                                                    <button title="Wishlist" ><i className=" ti-heart " /></button>
                                                                    <button title="Compare" ><i className="ti-bar-chart-alt" /></button>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <button title="Add to cart" >Add to cart</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <button title="Quick View" ><i className=" ti-eye" /></button>
                                                                    <button title="Wishlist" ><i className=" ti-heart " /></button>
                                                                    <button title="Compare" ><i className="ti-bar-chart-alt" /></button>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <button title="Add to cart" >Add to cart</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <button title="Quick View" ><i className=" ti-eye" /></button>
                                                                    <button title="Wishlist" ><i className=" ti-heart " /></button>
                                                                    <button title="Compare" ><i className="ti-bar-chart-alt" /></button>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <button title="Add to cart" >Add to cart</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <button title="Quick View" ><i className=" ti-eye" /></button>
                                                                    <button title="Wishlist" ><i className=" ti-heart " /></button>
                                                                    <button title="Compare" ><i className="ti-bar-chart-alt" /></button>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <button title="Add to cart" >Add to cart</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Product;