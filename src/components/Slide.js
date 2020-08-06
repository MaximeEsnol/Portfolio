import React, { useState, useEffect, useRef } from 'react';

const Slides = ( {children, ...props}) => {

    const [ slideOffset, setSlideOffset ] = useState(0);
    const slider = useRef();

    useEffect( () => {
        console.log(slider.current.offsetWidth);
        slider.current.scrollTo({
            top: 0,
            left: (slider.current.offsetWidth * children.length) * slideOffset / 100,
            behavior: "smooth"
        }); 

    } );
    
    const switchSlides = ( direction ) => {
        let offsetPerSlide = 100 / children.length;

        if ( direction === "previous" ) {
            goToSlide(slideOffset - offsetPerSlide);
        } else if ( direction === "next" ) {
            goToSlide(slideOffset + offsetPerSlide);
        }
    }

    const goToSlide = ( newOffset ) => {
        if ( newOffset <= 0 ) {
            setSlideOffset(0);
            return;
        }

        if ( newOffset >= 100 ) {
            setSlideOffset(100);
            return;
        }

        setSlideOffset( newOffset );
    }

    return(
        <div className="slides-container">
            <i className="fas fa-chevron-left" onClick={() => switchSlides.call(this, "previous")}></i>
            <i className="fas fa-chevron-right" onClick={() => switchSlides.call(this, "next")}></i>
            <div {...props} className="slides" ref={slider}>
                { children }
            </div>
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