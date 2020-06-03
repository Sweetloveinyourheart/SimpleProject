import React, { Component } from 'react';
import Slider from './Slider';
import Banner from './Banner';
import Product from './Product';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Slider />
                <Banner />
                <Product />
            </div>
         );
    }
}
 
export default Home;