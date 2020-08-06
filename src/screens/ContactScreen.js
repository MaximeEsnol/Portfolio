import React from 'react';
import useTitle from '../hooks/useTitle';
import ContactForm from '../components/ContactForm';

const ContactScreen = props => {
    useTitle("Contact me - Maxime Esnol");

    return( 
        <section className={"contact"}>
            <h1>Get in touch</h1>
            
            <ContactForm title={"Mail me"}/>
        </section>
    )
}

export default ContactScreen;