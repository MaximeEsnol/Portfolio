import React, { useState } from 'react';
import TimedTransition from './../components/TimedTransition';
import { Link } from 'react-router-dom';

const ProjectPreview = ({ project, isAnimated = false }) => {

    const [animatedClass, setAnimatedClass] = useState((isAnimated) ? "animated" : "");

    const title = (
        <h3>
            <Link to={"/project/" + project.slug }>
                {project.name}
                <i className="fas fa-chevron-right"></i>
            </Link>
        </h3>
    );
    const description = (<p>{project.description}</p>);
    const image = (
        <div className="project-image"
            style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/" + project.images[0].src + ")"}}>
        </div>
    );

    return (
        <div className="project-container">
            <div className={"project " + animatedClass}>
                <div className={"project-description"}>
                    {
                        (isAnimated) ?
                            <TimedTransition
                                started={true}
                                delay={750}
                                duration={3000}
                                children={title} />
                            :
                            title
                    }

                    {
                        (isAnimated) ?
                            <TimedTransition
                                started={true}
                                delay={2750}
                                duration={1000}
                                children={description} />
                            :
                            description
                    }

                </div>

                {
                    (isAnimated) ?
                        <TimedTransition
                            started={true}
                            delay={4250}
                            duration={750}
                            children={image} />
                        :
                        image
                }
            </div>
        </div>
    )
}

export default ProjectPreview;