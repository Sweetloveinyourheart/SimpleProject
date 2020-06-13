import React, { Component } from 'react';

class ContactForm extends Component {
    state = {}
    render() {
        return (
            <div className="col-lg-8 col-12">
                <div className="form-main">
                    <div className="title">
                        <h4>Get in touch</h4>
                        <h3>Write us a message</h3>
                    </div>
                    <form className="form" >
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="form-group">
                                    <label>Your Name<span>*</span></label>
                                    <input name="name" type="text" placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="form-group">
                                    <label>Your Subjects<span>*</span></label>
                                    <input name="subject" type="text" placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="form-group">
                                    <label>Your Email<span>*</span></label>
                                    <input name="email" type="email" placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="form-group">
                                    <label>Your Phone<span>*</span></label>
                                    <input name="company_name" type="text" placeholder="" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group message">
                                    <label>your message<span>*</span></label>
                                    <textarea name="message" placeholder=""></textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group button">
                                    <button type="submit" className="btn ">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;
