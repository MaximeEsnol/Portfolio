import React, { useRef, useState } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import TimedTransition from '../../components/TimedTransition';

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
                    My latest project
                </h2>

                {project != null &&
                    <TimedTransition
                        started={true}
                        classNames={""}
                        duration={1000}>
                        <div className="project-container">
                            <div className="project">
                                <div className="scaling-image">
                                    <img src={process.env.PUBLIC_URL + "/images/" + project.images[0]}
                                        alt={project.description} />
                                </div>
                                <div className="project-description">
                                    <h3>
                                        {project.name}
                                    </h3>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TimedTransition>
                }

            </section>
        </ReactVisibilitySensor>
    )
});

export default ProjectsSummary;