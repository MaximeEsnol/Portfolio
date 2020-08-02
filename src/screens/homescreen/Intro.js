import React from 'react';
import TimedTransition from './../../components/TimedTransition';

const Intro = ( { onRequestScroll } ) => {
    return (
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
                        user experiences and watch the stars.
                    </p>
                </TimedTransition>
            </div>

            {/** Starts at: 4800ms, Ends at: 5800ms */}
            <TimedTransition
                started={true}
                duration={1000}
                delay={4800}>
                <div className="fab-btn home-fab" onClick={onRequestScroll.bind(this)}>
                    <TimedTransition
                        started={true}
                        duration={500}
                        delay={5300}>
                        <i className="fas fa-chevron-down home-fab-icon"></i>
                    </TimedTransition>
                </div>
            </TimedTransition>

        </section>
    )
}

export default Intro;