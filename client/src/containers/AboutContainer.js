import React, { Component } from 'react';
import ShopInfo from '../components/About/ShopInfo';
import Owner from '../components/About/Owner';

class AboutContainer extends Component {
    state = {}
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="about">
                        <Owner />
                        <ShopInfo />

                    </div>
                </div>
            </section>
        );
    }
}

export default AboutContainer;