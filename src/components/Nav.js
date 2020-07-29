import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition, Transition } from 'react-transition-group';

const Nav = ({ toggleMenu, isOpen, isFixedNav, height }) => {
    const [icon, setIcon] = useState(faBars);
    const oldIsOpened = useRef(isOpen);
    const iconTimeout = useRef(null);

    useEffect(() => {
        if (isOpen !== oldIsOpened.current) {
            iconTimeout.current = setTimeout( () => {
                setIcon( (isOpen) ? faTimes : faBars );
            }, 100);
            oldIsOpened.current = isOpen;
        }
    });

    return (
        <>
            <nav style={{ height: height + "px" }}>
                <p>Maxime Esnol</p>

                <Transition timeout={200}>
                    <CSSTransition
                        in={isOpen}
                        classNames=""
                        timeout={200}>
                        <div className="menu-icon">
                            <FontAwesomeIcon
                                icon={icon}
                                size={"lg"}
                                onClick={toggleMenu} />

                        </div>
                    </CSSTransition>
                </Transition>
            </nav>

            {
                isFixedNav &&
                <div className="nav-fix-height"
                    style={{ height: height + "px" }}></div>
            }
        </>
    )
}

export default Nav;