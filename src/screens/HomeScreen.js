import React, { useRef, useEffect } from 'react';
import useTitle from '../hooks/useTitle';
import TimedTransition from '../components/TimedTransition';

const HomeScreen = props => {

    useTitle("Maxime Esnol");

    return (
        <div className="home">
            <section>
                <h1 className="multiline">
                    {/** Delayed: 0 secs */}
                    <TimedTransition
                        started={true}
                        duration={2000}
                        classNames={""}>
                        <span className="line home-hi">
                            Hi,
                        </span>
                    </TimedTransition>
                    {/** Starts at: 1200ms, ends at: 2200ms */}
                    <TimedTransition
                        started={true}
                        duration={1000}
                        delay={1200}
                        classNames={""}>
                        <span className="line home-name">
                            I'm Maxime
                        </span>
                    </TimedTransition>
                    
                </h1>

                <div className="home-bio-container">
                    {/** Starts at: 2800ms, ends at: 3800ms */}
                    <TimedTransition
                        started={true}
                        duration={1000}
                        delay={2800}
                        classNames="">
                        <p className="home-bio">
                            I'm a passionate web developer who loves to
                            learn about new technologies, build memorable
                            user experiences and watch football.
                        </p>
                    </TimedTransition>
                </div>

                {/** Starts at: 4800ms, Ends at: 5800ms */}
                <TimedTransition
                    started={true}
                    duration={1000}
                    delay={4800}>
                    <div className="fab-btn home-fab">
                        <TimedTransition
                            started={true}
                            duration={500}
                            delay={5300}>
                            <i className="fas fa-chevron-down home-fab-icon"></i>
                            </TimedTransition>
                       
                    </div>
                </TimedTransition>
                
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