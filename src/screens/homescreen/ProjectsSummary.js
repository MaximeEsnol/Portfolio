import React, { useRef, useState } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-router-dom';
import ProjectPreview from '../../components/ProjectPreview';

const ProjectsSummary = React.forwardRef((props, ref) => {

    const hasBeenVisible = useRef(false);
    const [project, setProject] = useState(null);

    const onChangeVisibility = (visible) => {
        if (!hasBeenVisible.current && visible) {
            hasBeenVisible.current = true;

            loadLatestProject()
                .then((project) => {
                    setProject(project);
                });
        }
    }

    const loadLatestProject = () => {
        return new Promise((resolve) => {
            let projects = require("./../../assets/data/projects.json");

            resolve(projects[projects.length - 1]);
        });
    }

    return (
        <ReactVisibilitySensor
            partialVisibility
            offset={{ bottom: 100 }}
            onChange={(isVisible) => onChangeVisibility(isVisible)}>
            <section ref={ref}>
                <h2>
                    Latest work
                </h2>

                {project != null &&
                <>
                    <ProjectPreview project={project} isAnimated={true}/>
                    <Link to={"/projects"} className="button primary more-projects-btn">
                        See more
                    </Link>
                </>
                }
            </section>
        </ReactVisibilitySensor>
    )
});

export default ProjectsSummary;