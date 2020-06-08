import React, { Component } from 'react';
import Slider from '../components/Home/Slider';
import Banner from '../components/Home/Banner';
import Product from '../components/Home/Product';
import Cowndown from '../components/Home/Cowndown';
import MidiumBanner from '../components/Home/MidiumBanner';
import Service from '../components/Home/Service';

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <Slider />
                <Banner />
                <Product />
                <MidiumBanner />
                <Cowndown />
                <Service />          
            </div>
        );
    }
}

export default Home;