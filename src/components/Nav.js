import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = ( { toggleMenu, isOpen, isFixedNav, height } ) => {
    const iconRef = useRef();

    return (
        <> 
            <nav style={ {height: height + "px"} }>
                <p>Maxime Esnol</p>

                <div className="menu-icon" ref={iconRef.current}>
                    <FontAwesomeIcon
                        icon={(isOpen) ? faTimes : faBars}
                        size={"lg"}
                        onClick={toggleMenu} />
                </div>
            </nav>
            
            { isFixedNav && 
                <div className="nav-fix-height"
                    style={ {height: height + "px"}}></div>
            }
        </>
    )
}

export default Nav;