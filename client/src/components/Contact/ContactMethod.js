import React, { Component } from 'react';

class ContactMethod extends Component {
    state = {}
    render() {
        return (
            <div className="col-lg-4 col-12">
                <div className="single-head">
                    <div className="single-info">
                        <i className="fa fa-envelope-open"></i>
                        <h4 className="title">Email:</h4>
                        <ul>
                            <li><p >tynxcode.js@gmail.com</p></li>
                            <li><p >sweetloveinyourheart@gmail.com</p></li>
                        </ul>
                    </div>
                    <div className="single-info">
                        <i className="fa fa-location-arrow"></i>
                        <h4 className="title">Our Address:</h4>
                        <ul>
                            <li>BMT City - Viet Nam</li>
                            <li>Ho Chi Minh City - Viet Nam</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactMethod;