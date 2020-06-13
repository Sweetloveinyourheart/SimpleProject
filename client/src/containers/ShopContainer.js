import React, { Component } from 'react';
import Sidebar from '../components/Shop/Sidebar';
import ShopProduct from '../components/Shop/Product';
import Title from '../components/Shop/Title';
import PageController from '../components/Shop/PageController';

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
                                <ShopProduct />
                            </div>
                            <PageController />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShopContainer;