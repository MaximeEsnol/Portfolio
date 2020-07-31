import React, { useRef, useEffect } from 'react';
import useTitle from '../hooks/useTitle';
import TimedTransition from '../components/TimedTransition';

const HomeScreen = props => {

    useTitle("Maxime Esnol");

    const hiRef = useRef();
    const nameRef = useRef();
    const h1Ref = useRef();
    const aboutRef = useRef();

    return (
        <div className="home">
            <section>
                <h1 className="multiline" ref={h1Ref}>
                    <TimedTransition
                        started={true}
                        duration={750}
                        classNames={""}>
                        <span className="line home-hi" ref={hiRef}>
                            Hi,
                        </span>
                    </TimedTransition>

                    <TimedTransition
                        started={true}
                        duration={750}
                        delay={450}
                        classNames={""}>
                        <span className="line home-name" ref={nameRef}>
                            I'm Maxime
                        </span>
                    </TimedTransition>
                    
                </h1>

                <p ref={aboutRef}>
                    I'm a passionate web developer who loves to
                    learn about new technologies, build memorable
                    user experiences and watch football.
                </p>
            </section>

            <section>
                <h2>
                    Projects I've worked on
                </h2>
            </section>
        </div>
    )
}

export default HomeScreen