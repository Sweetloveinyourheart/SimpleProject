import React, { Component } from 'react';

class ModalImage extends Component {
    constructor(props){
        super(props)
        this.state = {
            imageActivating: 1
        }
    }
    showImage = () => {
        const { images } = this.props
        var active = this.state.imageActivating
        return images[active]
    }
    onPrevClick = () => {
        var activating = this.state.imageActivating
        activating !== 1 ? activating-- : activating=3 
        this.setState({
            imageActivating: activating
        })
    }
    onNextClick = () => {
        var activating = this.state.imageActivating
        activating !== 3 ? activating++ : activating=1 
        this.setState({
            imageActivating: activating
        })
    }

    render() {
        return (
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="product-gallery">
                    <div className="quickview-slider-active owl-carousel">
                        <div className="single-slider">
                            <img src={this.showImage()} alt="#" />
                        </div>
                        <div className="owl-nav">
                            <div className="owl-prev" onClick={this.onPrevClick}>
                                <i className="ti-arrow-left" />
                            </div>
                            <div className="owl-next" onClick={this.onNextClick}>
                                <i className="ti-arrow-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalImage