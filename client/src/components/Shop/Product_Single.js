import React, { Component } from 'react';

class SingleProduct extends Component {

    render() {
        const { content } = this.props
        return (
            <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                <div className="single-product">
                    <div className="product-img">
                        <img className="default-img" src={content.images[0]} alt="#" />
                        <img className="hover-img" src={content.images[1]} alt="#" />
                        <span className="new">New</span>
                        <div className="button-head">
                            <div className="product-action">
                                <button data-toggle="modal" data-target="#exampleModal" title="Quick View"><i className=" ti-eye" /></button>
                                <button title="Wishlist"><i className=" ti-heart " /></button>
                                <button title="Compare"><i className="ti-bar-chart-alt" /></button>
                            </div>
                            <div className="product-action-2">
                                <button title="Add to cart">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <h3><a href="product-details.html">{content.name}</a></h3>
                        <div className="product-price">
                            <span>{content.price + " VNĐ"}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleProduct;