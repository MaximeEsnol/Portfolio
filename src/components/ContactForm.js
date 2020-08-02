import React, { useState, useEffect } from 'react';
import TextInput, { Textarea } from './TextInput';

const ContactForm = ({ title }) => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");

    const [ mailto, setMailto ] = useState("mailto:maxime.esnol02@gmail.com");

    const [ buttonClass, setButtonClass ] = useState("disabled");

    useEffect( () => {
        if ( message.length > 3 ) {
            if ( buttonClass !== "" ) {
                setButtonClass("");
            } 

            let mail = "?subject=";
            mail += encodeURI("[Contact Form] [" + name + "]");
            mail += "&body=";
            mail += encodeURI(message);
            mail += "&bcc=" + email; 

            setMailto(mail);
        } else {
            setButtonClass("disabled");
        }
    }, [message]);

    return (
        <form className="contact">
            <h3>
                {title}
            </h3>
            <TextInput name="name" 
            id="name" 
            label="Your name" 
            onChangeText={(text) => setName(text)}/>

            <TextInput name="email" 
            id="email" 
            label="Your email" 
            onChangeText={(text) => setEmail(text)}/>

            <Textarea name="message" 
            id="message" 
            label="Your message" 
            onChangeText={(text) => setMessage(text)}/>

            <button disabled={(buttonClass === "disabled")} className={"button primary"}>
                Send
            </button>
        </form>
    )
}

export default ContactForm;