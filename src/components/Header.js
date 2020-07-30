import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Nav from './Nav';
import Menu from './Menu';
import SocialLinks from './SocialLinks';

const Header = props => {

    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = () => {
        setMenuOpened(!menuOpened);
    }

    return (
        <header>
            <Nav toggleMenu={toggleMenu} 
                isOpen={menuOpened}
                isFixedNav={true}
                height={70}/>

            <Menu isOpen={menuOpened}>
                <ul className="site-links">
                    <li>
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/experience" onClick={toggleMenu}>Experience</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={toggleMenu}>Get in touch</Link>
                    </li>
                </ul>

                <SocialLinks/>
            </Menu>
        </header>
    )
};

export default Header;