import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/homepageActions';

import Slider from '../components/Home/Slider';
import Banner from '../components/Home/Banner';
import Newest from '../components/Home/Newest';
import Cowndown from '../components/Home/Cowndown';
import MidiumBanner from '../components/Home/MidiumBanner';
import Service from '../components/Home/Service';

class Home extends Component {
    async componentDidMount(){
        await this.props.getNewestProduct()
    }
    render() {
        const { newest } = this.props
        return (
            <div>
                <Slider />
                <Banner />
                <Newest product={newest} />
                <MidiumBanner />
                <Cowndown />
                <Service />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        newest: state.homepage.product
    }
}

export default connect(mapStateToProps, actions)(Home);