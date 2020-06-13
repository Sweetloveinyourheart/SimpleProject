import React, { Component } from 'react';
class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: 'block'
        }
        this.close = this.close.bind(this);
    }
    close(){
        this.setState({
            display: 'none'
        })
    }
    render() {
        return (
            <div className="modal fade show"  style={{display: this.state.display}}>
                <div className="modal-dialog" role="document" style={{margin: '8% auto 8%'}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.close}><span className="ti-close" aria-hidden="true" /></button>
                        </div>
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    {/* Product Slider */}
                                    <div className="product-gallery">
                                        <div className="quickview-slider-active owl-carousel">
                                            <div className="single-slider">
                                                <img src="https://via.placeholder.com/569x528" alt="#" />
                                            </div>
                                            <div className="owl-nav">
                                                <div className="owl-prev">
                                                    <i className="ti-arrow-left"/>
                                                </div>
                                                <div className="owl-next">
                                                    <i className="ti-arrow-right"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Product slider */}
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="quickview-content">
                                        <h2>Flared Shift Dress</h2>
                                        <div className="quickview-ratting-review">
                                            <div className="quickview-stock">
                                                <span><i className="fa fa-check-circle-o" /> Đầm Xuông</span>
                                            </div>
                                        </div>
                                        <h3>$29.00</h3>                                       
                                        <div className="quickview-peragraph">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.</p>
                                        </div>
                                        
                                        <div className="add-to-cart">
                                            <a href="abc" className="btn">Add to cart</a>
                                            <a href="abc" className="btn min"><i className="ti-heart" /></a>
                                        </div>
                                        <div className="default-social">
                                            <h4 className="share-now">Share:</h4>
                                            <ul>
                                                <li><a className="facebook" href="abc"><i className="fa fa-facebook" /></a></li>
                                                <li><a className="twitter" href="abc"><i className="fa fa-twitter" /></a></li>
                                                <li><a className="youtube" href="abc"><i className="fa fa-pinterest-p" /></a></li>
                                                <li><a className="dribbble" href="abc"><i className="fa fa-google-plus" /></a></li>
                                            </ul>
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

export default Modal;