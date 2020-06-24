import React, { Component } from 'react';
import SingleProduct from './Product_Single';

class ShopProduct extends Component {
    showProduct = () => {
        const product = this.props.product
        if (product) {
            var result = product.map((value, index) => {
                return <SingleProduct content={value} key={index} />
            })
            return result
        }
        return <h5>Loading .... </h5>

    }
    render() {
        return (
            <div className="tab-pane fade show active" id="man" role="tabpanel">
                <div className="tab-single">
                    <div className="row">
                        {this.showProduct()}
                    </div>
                </div>
            </div>

        );
    }
}

export default ShopProduct;