import React, { useRef } from 'react';
import useTitle from '../hooks/useTitle';
import Intro from './homescreen/Intro';

const HomeScreen = props => {

    useTitle("Maxime Esnol");

    const aboutRef = useRef(null);

    const scrollTo = ref => {
        window.scrollTo({
            left: 0,
            top: ref.current.offsetTop - 20,
            behavior: "smooth"
        });
    }

    return (
        <div className="home">

            <Intro onRequestScroll={scrollTo.bind(this, aboutRef)}/>

            <section id="about" ref={aboutRef}>
                <h2>
                    Projects I've worked on
                </h2>
            </section>
        </div>
    )
}

export default HomeScreen