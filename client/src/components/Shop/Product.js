import React, { Component } from 'react';

class ShopProduct extends Component {
    state = {}
    render() {
        return (
            <div className="tab-pane fade show active" id="man" role="tabpanel">
                <div className="tab-single">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="product-details.html">
                                        <img className="default-img" src="https://cf.shopee.vn/file/e362959713dc190ab7e8bd173fe1c53e_tn" alt="#" /> 
                                        <span className="new">New</span>
                                    </a>
                                    <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="abc"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="abc"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="abc"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="abc">Add to cart</a>
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
                                    <a href="product-details.html">
                                        <img className="default-img" src="https://cf.shopee.vn/file/c78e237f6885f685c2d245bb5a7cb5b2_tn" alt="#" />
                                        <span className="price-dec">30% Off</span>
                                    </a>
                                    <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="abc"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="abc"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="abc"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="abc">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                    <div className="product-price">
                                        <span>$29.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="product-details.html">
                                        <img className="default-img" src="https://cf.shopee.vn/file/ac48ead13102e2ee9bf45ecbd053fe66_tn" alt="#" />
                                    </a>
                                    <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="abc"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="abc"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="abc"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="abc">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                    <div className="product-price">
                                        <span>$29.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="product-details.html">
                                        <img className="default-img" src="https://cf.shopee.vn/file/c7e3435a1b5d84f7346c4459a125c6f7_tn" alt="#" />
                                        <span className="out-of-stock">Hot</span>
                                    </a>
                                    <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="abc"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="abc"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="abc"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="abc">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                    <div className="product-price">
                                        <span className="old">$60.00</span>
                                        <span>$50.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ShopProduct;