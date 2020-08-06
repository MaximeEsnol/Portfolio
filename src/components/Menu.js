import React from 'react';
import { Transition, CSSTransition } from 'react-transition-group';

const Menu = ({ isOpen, className, children, triggerClose = null }) => {

    const close = () => {
        if ( triggerClose != null ) {
            triggerClose();
        }
    }

    return (
        <Transition timeout={500}>
            <>
                <CSSTransition
                in={isOpen}
                className="overlay"
                timeout={500}>
                    <div onClick={close}></div>
                </CSSTransition>
                <CSSTransition
                    in={isOpen}
                    className={"slide"}
                    timeout={500}>
                    <div>
                        {children}
                    </div>
                </CSSTransition>
            </>
        </Transition>
    )
}

export default Menu;