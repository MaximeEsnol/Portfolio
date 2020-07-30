import React, { useRef, useEffect } from 'react';
import useTitle from '../hooks/useTitle';

const ContactScreen = props => {
    const hasMounted = useRef(false);

    useTitle("Contact me - Maxime Esnol");

    return( 
        <div>
            <h1>Get in touch</h1>
            <p>Do you want more information? Want to talk? Have feedback? Let's talk, I am all ears.</p>
        </div>
    )
}

export default ContactScreen;