import React from 'react';
import TimedTransition from './../components/TimedTransition';

const ProjectPreview = ({ project }) => {
    return (
        <div className="project-container">
            <div className="project">
                <div className="project-description">
                    <TimedTransition
                        started={true}
                        delay={750}
                        duration={3000}
                        classNames="">
                        {/** TODO: put arrow after name to indicate it is clickable */}
                        <h3>
                            {project.name}
                        </h3>
                    </TimedTransition>

                    <TimedTransition
                        started={true}
                        delay={2750}
                        duration={1000}
                        classNames="">
                        <p>
                            {project.description}
                        </p>
                    </TimedTransition>
                </div>
                <TimedTransition
                    started={true}
                    delay={4250}
                    duration={750}>
                    <img src={process.env.PUBLIC_URL + "/images/" + project.images[0].src}
                        alt={project.images[0].alt} />
                </TimedTransition>
            </div>
        </div>
    )
}

export default ProjectPreview;