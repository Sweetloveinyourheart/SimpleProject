import React, { Component } from 'react';

class ShopInfo extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-lg-6 col-12">
                    <div className="info">
                        <div className="header">
                            <h3>Wellcome to Sweet Shop </h3>
                        </div>
                        <div className="content">
                            <h4>A small river named Duden flows by their place </h4>
                            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin</p>
                            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-12">
                    <img src="/images/single_blog_4.png" alt="#"></img>
                </div>
            </div>
        );
    }
}

export default ShopInfo;