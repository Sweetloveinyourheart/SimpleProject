import React, { Component } from 'react';
import NewestProduct from './NewestProduct';

class Newest extends Component {
    showProduct = (product) => {
        if (!product) {
            return <h3>Loading ...</h3>
        }
        var newestProduct = product.map((value, index) => {
            return <NewestProduct detail={value} key={index}/>
        })
        return newestProduct
    }
    render() {
        const { product } = this.props
        return (
            <div className="product-area section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Latest Item</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-info">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="man" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                {this.showProduct(product)}
                                            </div>
                                        </div>
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

export default Newest;