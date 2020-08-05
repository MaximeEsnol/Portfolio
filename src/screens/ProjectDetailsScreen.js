import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Axios from 'axios';
import marked from 'marked';
import Slides, { Slide } from '../components/Slide';
import { TechnologyBadge } from '../components/Badges';
import { FixedFooter } from '../components/Footer';

const ProjectDetailsScreen = props => {
    const { slug } = useParams();

    const hasMounted = useRef(false);
    const [ project, setProject ] = useState({});

    useEffect(() => {
        if ( !hasMounted.current ) {
            hasMounted.current = true;

            let project = require("./../assets/data/projects.json").find( element => element.slug === slug );

            Axios.get("../data/project-data/" + slug + ".md")
            .then( (response) => {
                project.about = {__html: marked(response.data)};
            })
            .catch((reason) => {
                project.about = {__html: "<p>Unable to retrieve this project's 'About'.</p>"}
            })
            .finally(() => {
                setProject(project);
            });
        }
    }, []);

    return(
        <div className="project-details">
            <Slides>
                { project.images !== undefined && project.images.map((value, index) => {
                    return (
                        <Slide key={index}
                        style={{backgroundImage: "url(../images/"+ value.src +")"}}/>
                    )  
                }) }
            </Slides>

            <h1>
                { project.name }
            </h1>

            <p className="description">
                { project.description }    
            </p>

            <div className="technologies">
                { project.technologies !== undefined && project.technologies.map((value, index) => {
                    return <TechnologyBadge key={index} name={value}/>
                })}
            </div>

            <div className={"about"} dangerouslySetInnerHTML={project.about}></div>

            <FixedFooter height={"60px"}>
                { project.repository !== undefined &&
                    <a href={project.repository} className={"button primary"}>
                        View Code
                    </a>
                }

                { project.demo !== undefined && 
                    <a href={project.demo} className={"button primary"}>
                        View Demo
                    </a>
                }
            </FixedFooter>
        </div>
    )
}

export default ProjectDetailsScreen;