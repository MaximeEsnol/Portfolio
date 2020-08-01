import React, { useRef } from 'react';
import useTitle from '../hooks/useTitle';
import Intro from './homescreen/Intro';
import ProjectsSummary from './homescreen/ProjectsSummary';

const HomeScreen = props => {

    useTitle("Maxime Esnol");

    const aboutRef = useRef(null);

    const scrollTo = ref => {
        window.scrollTo({
            left: 0,
            top: ref.current.offsetTop,
            behavior: "smooth"
        });
    }

    return (
        <div className="home">

            <Intro onRequestScroll={scrollTo.bind(this, aboutRef)}/>

            <ProjectsSummary ref={aboutRef} />
            
        </div>
    )
}

export default HomeScreen