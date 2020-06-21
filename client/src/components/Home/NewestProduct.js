import React, { Component } from 'react';

class NewestProduct extends Component {
    render() {
        var { detail } = this.props;
        return (
            <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                <div className="single-product">
                    <div className="product-img">
                        <img className="default-img" src={detail.images[0]} alt="#" />
                        <img className="hover-img" src={detail.images[1]} alt="#" />
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
                        <h3><a href="product-details.html">{detail.name}</a></h3>
                        <div className="product-price">
                            <span>{detail.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewestProduct;