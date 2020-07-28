import React from 'react';
import { useLocation } from 'react-router';
import { Link, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import ContactScreen from './screens/ContactScreen';
import AnimatedSwitch from './components/AnimatedSwitch';

const AnimatedApp = props => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
                <li>
                    <Link to="/contact">Get in touch</Link>
                </li>
            </ul>

            <div className="content">
                <AnimatedSwitch>
                    <Route exact path={"/"} component={HomeScreen}/>
                    <Route path={"/projects"} component={ProjectsScreen}/>
                    <Route path={"/experience"} component={ExperienceScreen}/>
                    <Route path={"/contact"} component={ContactScreen}/>
                </AnimatedSwitch>
            </div>
        </>
    )
}

export default AnimatedApp;