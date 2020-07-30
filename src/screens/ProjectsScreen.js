import React from 'react';
import useTitle from '../hooks/useTitle';

const ProjectsScreen = props => {

    useTitle("My Work - Maxime Esnol");

    return(
        <div>
            <h1>My work</h1>
            <p>Everything I've made. Websites, apps, programs.</p>
        </div>
    )
}

export default ProjectsScreen;