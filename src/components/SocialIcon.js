import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ( { social } ) => {

    const { url, icon } = social;

    return (
        <li>
            <a href={url}>
                <FontAwesomeIcon icon={"github"}/>
            </a>
        </li>
    )
}

export default SocialIcon;