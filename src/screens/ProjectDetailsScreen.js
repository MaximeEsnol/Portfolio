import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetailsScreen = props => {
    const { slug } = useParams();

    const hasMounted = useRef(false);
    const [ project, setProject ] = useState({});

    useEffect(() => {
        if ( !hasMounted.current ) {
            hasMounted.current = true;

            let project = require("./../assets/data/projects.json").find( element => element.slug === slug );

            setProject(project);
        }
    }, []);

    return(
        <div className="project-details">
            <h1>
                { project.name }
            </h1>
        </div>
    )
}

export default ProjectDetailsScreen;