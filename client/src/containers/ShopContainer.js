import React, { Component } from 'react';
import Sidebar from '../components/Shop/Sidebar';
import ShopProduct from '../components/Shop/Product';
import Title from '../components/Shop/Title';

class ShopContainer extends Component {
    state = {}
    render() {
        return (
            <section className="product-area section">
                <div className="container">
                    <div className="row">
                        <Title />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-info">
                                <Sidebar />
                                <ShopProduct />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShopContainer;