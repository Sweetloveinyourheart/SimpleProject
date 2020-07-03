import React, { Component } from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactMethod from '../components/Contact/ContactMethod';

class ContactContainer extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <section className="contact-us section">
                <div className="container">
                    <div className="contact-head">
                        <div className="row">
                            <ContactForm />
                            <ContactMethod />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactContainer;