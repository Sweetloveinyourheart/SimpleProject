import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/homepageActions';

import Slider from '../components/Home/Slider';
import Banner from '../components/Home/Banner';
import Newest from '../components/Home/Newest';
import Cowndown from '../components/Home/Cowndown';
import MidiumBanner from '../components/Home/MidiumBanner';
import Service from '../components/Home/Service';
import ModalContainer from './ModalContainer';

class Home extends Component {
    async componentDidMount(){
        window.scrollTo(0,0)
        await this.props.getNewestProduct()
        await this.props.getTheMostExpensiveProduct()
    }
    render() {
        const { newest, mostExpensive} = this.props
        const { activeModal } = this.props
        return (
            <div>
                <Slider />
                <Banner />
                <Newest product={newest} active={activeModal}/>
                <MidiumBanner />
                <Cowndown product={mostExpensive}/>
                <Service />
                <ModalContainer />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        newest: state.homepageNewest.product,
        mostExpensive: state.homepageRandom.product
    }
}

export default connect(mapStateToProps, actions)(Home);