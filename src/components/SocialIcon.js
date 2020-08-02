import React from 'react';

const SocialIcon = ( { social, withUsername = false } ) => {

    const { url, icon, accent, username } = social;

    return (
        <li>
            <a href={url} accentcolor={accent}>
                <i className={icon}></i>
                { withUsername && 
                <span className="social__username">{username}</span>
                }
            </a>
        </li>
    )
}

export default SocialIcon;