import React, { useState, useEffect, useRef } from 'react';
import TextInput, { Textarea } from './TextInput';

const ContactForm = ({ title }) => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ tags, setTags ] = useState(null);

    const mailtoPrefix = useRef("mailto:maxime.esnol02@gmail.com").current;

    const [ mailto, setMailto ] = useState("");

    const [ buttonClass, setButtonClass ] = useState("disabled");

    useEffect( () => {
        if ( message.length > 3 && name !== "" && email.includes("@") && tags == null) {
            if ( buttonClass !== "" ) {
                setButtonClass("");
            } 

            let mail = mailtoPrefix + "?subject=";
            mail += encodeURI("[Contact Form] [" + name + "]");
            mail += "&body=";
            mail += encodeURI(message);
            mail += "&bcc=" + email; 

            setMailto(mail);
        } else {
            setButtonClass("disabled");
        }
    }, [message, name, email, tags]);

    const openMail = () => {
        window.open(mailto, "_blank");
    }

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

            <TextInput name="tags"
            honeypot={true}
            id="tags"
            label="Tags for your message"
            onChangeText={(text) => setTags(text)}/>


            <button disabled={(buttonClass === "disabled")} 
            type="button" 
            className={"button primary"}
            onClick={openMail}>
                Send
            </button>
        </form>
    )
}

export default ContactForm;