import React, { Component } from 'react';

class SingleProduct extends Component {

    showDetail = (content) => {
        this.props.activeModal(content)
    }
    render() {
        const { content } = this.props
        return (
            <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                <div className="single-product">
                    <div className="product-img" onClick={() => this.showDetail(content)}>
                        <img className="default-img" src={content.images[0]} alt="#" />
                        <img className="hover-img" src={content.images[1]} alt="#" />
                        <span className="new">New</span>
                        <div className="button-head">
                            <div className="product-action">
                                <button title="Quick View" onClick={() => this.showDetail(content)}><i className=" ti-eye" /></button>
                                <button title="Wishlist"><i className=" ti-heart " /></button>
                                <button title="Compare"><i className="ti-bar-chart-alt" /></button>
                            </div>
                            <div className="product-action-2">
                                <button title="Add to cart" onClick={() => this.showDetail(content)}>View This Product</button>
                            </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <h3><p >{content.name}</p></h3>
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