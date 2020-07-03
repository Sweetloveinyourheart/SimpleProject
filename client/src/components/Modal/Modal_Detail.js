import React, { Component } from 'react';

class ModalDetail extends Component {
    state = {}
    render() {
        const { detail } = this.props
        return (
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="quickview-content">
                    <h2>{detail.name}</h2>
                    <div className="quickview-ratting-review">
                        <div className="quickview-stock">
                            <span><i className="fa fa-check-circle-o" /> {detail.category}</span>
                        </div>
                    </div>
                    <h3>{detail.price}</h3>
                    <div className="quickview-peragraph">
                        <p>{detail.description}</p>
                    </div>

                    <div className="add-to-cart">
                        <a href={detail.link} className="btn" target="_blank" rel="noopener noreferrer">Buy Now</a>
                        <a href="#abc" className="btn min"><i className="ti-heart" /></a>
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
        );
    }
}

export default ModalDetail;