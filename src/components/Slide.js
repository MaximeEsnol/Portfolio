import React from 'react';

const Slides = props => {

    return(
        <div {...props} className="slides">
            { props.children }
        </div>
    )
}

export const Slide = props => {

    return (
        <div {...props} className="slide">
            { props.children }
        </div>
    )
}

export default Slides;