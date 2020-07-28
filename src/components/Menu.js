import React from 'react';
import { Transition, CSSTransition } from 'react-transition-group';

const Menu = ({ isOpen, className, children }) => {

    return (
        <Transition>
            <CSSTransition
                in={isOpen}
                className={"slide"}
                timeout={500}>
                <div>
                    {children}
                </div>
            </CSSTransition>
        </Transition>
    )
}

export default Menu;