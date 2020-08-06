import React, { useRef } from 'react';
import useTitle from '../hooks/useTitle';
import ProjectPreview from '../components/ProjectPreview';

const ProjectsScreen = props => {

    useTitle("My Work - Maxime Esnol");

    const projects = useRef(require("./../assets/data/projects.json")).current;

    return(
        <section>
            <h1>My work</h1>

            {
                projects.map( (project, index) => {
                    return <ProjectPreview key={index} project={project}/>
                })
            }
        </section>
    )
}

export default ProjectsScreen;