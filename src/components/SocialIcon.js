import React from 'react';

const SocialIcon = ( { social } ) => {

    const { url, icon, accent } = social;

    return (
        <li>
            <a href={url} accentcolor={accent}>
                <i className={icon}></i>
            </a>
        </li>
    )
}

export default SocialIcon;