import React, {useRef} from 'react';
import './../assets/styles/scrollsnap.css';

export const ScrollSnapContainer = ( { children, className } ) => {

    const finalClassname = useRef("ss-container" + ((className) ? " " + className : ""));

    console.log(finalClassname.current);

    return (
        <div className={finalClassname.current}>
            { children }
        </div>
    )
}

export const SnapSection = ( { children, style, className } ) => {

    const finalClassname = useRef("ss-section" + ((className) ? " " + className : ""));

    return (
        <div className={finalClassname.current} style={style}>
            { children }
        </div>
    )
}