import React from 'react';
import useTitle from '../hooks/useTitle';
import { ScrollSnapContainer, SnapSection } from '../components/ScrollSnap';

const HomeScreen = props => {

    useTitle("Maxime Esnol");

    return (
        <div className="home">
            <section>
                <h1 className="multiline">
                    <span className="line">
                        Hi,
                    </span>
                    <span className="line">
                        I'm Maxime
                    </span>
                </h1>

                <p>
                    I'm a passionate web developer who loves to 
                    learn about new technologies, build memorable 
                    user experiences and watch football.
                </p>
            </section>
        </div>
    )
}

export default HomeScreen