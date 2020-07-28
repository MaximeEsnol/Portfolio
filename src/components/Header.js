import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Menu from './Menu';

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

            <Menu>
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
            </Menu>
        </header>
    )
};

export default Header;