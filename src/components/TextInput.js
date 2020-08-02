import React, { useState, useRef } from 'react';

const TextInput = ( { name, id, label, onChangeText = null, defaultValue = "", type = "text", honeypot = false} ) => {

    const [value, setValue] = useState(defaultValue);

    const styles = useRef();

    if ( honeypot ) {
        styles.current = {
            height: 0,
            position: "absolute",
            overflow: "hidden"
        }
    }

    const onChange = event => {
        setValue(event.target.value);

        if ( onChangeText != null ) {
            onChangeText.call(this, event.target.value);
        }
    }

    return(
        <div className="input-field" style={styles.current}>
            <input type={type} 
                id={id} 
                name={name} 
                value={value} 
                onChange={(e) => onChange(e)}
                placeholder=" "/>         
            <label htmlFor={id}>
                {label}
            </label>
            <div className="input-background"></div>
        </div>
    )
}

export const Textarea = ( {name, id, label, onChangeText = null, defaultValue = "", type = "text"} ) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = event => {
        setValue(event.target.value);

        if ( onChangeText != null ) {
            onChangeText.call(this, event.target.value);
        }
    }

    return (
        <div className="input-field">
            <textarea id={id} 
                name={name} 
                value={value} 
                onChange={(e) => onChange(e)}
                placeholder=" ">{value}</textarea>
            <label htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default TextInput;