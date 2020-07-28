import React from 'react';
import { Switch } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { withRouter } from 'react-router';
import uniqid from 'uniqid';

const AnimatedSwitch = withRouter(({ location, children }) => {
    
    if ( typeof location.key === "undefined" ) {
        // If the location contains no key, we manually 
        // create one. This is necessary otherwise the 
        // SwitchTransition will be stuck in an infinite
        // loop between the -enter and -exit transitions.
        location.key = uniqid();
    }

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition 
                key={location.key}
                classNames="fade"
                timeout={{enter: 250, exit: 250}}
            >

                <Switch location={location}>
                    {children}
                </Switch>

            </CSSTransition>
        </SwitchTransition>
    )
});

export default AnimatedSwitch;