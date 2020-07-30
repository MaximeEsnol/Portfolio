import React from 'react';
import useTitle from '../hooks/useTitle';

const ExperienceScreen = props => {

    useTitle("Experience - Maxime Esnol");

    return(
        <div>
            <h1>My working experience</h1>
            <p>Internships, studies. Find it here.</p>
        </div>
    )
}

export default ExperienceScreen;