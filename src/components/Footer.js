import React from 'react';

const Footer = props => {

    return(
        <>
        </>
    )
}

export const FixedFooter = ( { children, height, ...props } ) => {
    return (
        <>
            <div className={"fixed-footer-height"} style={{height: height}}></div>
            <div {...props} className={"fixed-footer"}>
                { children }
            </div>
        </>
    )
}

export default Footer;