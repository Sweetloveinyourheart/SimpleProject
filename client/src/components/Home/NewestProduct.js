import React, { Component } from 'react';

class NewestProduct extends Component {
    
    activeModal = (detail) => {
        this.props.active(detail)
    }
    render() {
        var { detail } = this.props;
        return (
            <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                <div className="single-product">
                    <div className="product-img" onClick={() => this.activeModal(detail)} >
                        <img className="default-img" src={detail.images[0]} alt="#" />
                        <img className="hover-img" src={detail.images[1]} alt="#" />
                        <div className="button-head">
                            <div className="product-action">
                                <button title="Quick View" onClick={() => this.activeModal(detail)}><i className=" ti-eye" /></button>
                                <button title="Wishlist" ><i className=" ti-heart " /></button>
                                <button title="Compare" ><i className="ti-bar-chart-alt" /></button>
                            </div>
                            <div className="product-action-2">
                                <button title="View" onClick={() => this.activeModal(detail)}>View This Product</button>
                            </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <h3><p>{detail.name}</p></h3>
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