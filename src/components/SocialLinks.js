import React, { useRef } from 'react';
import SocialIcon from './SocialIcon';

const SocialLinks = ( { withUsername = false } ) => {

    const socialData = useRef( require("./../assets/data/social.json") );

    return(
        <div className="social-links">
            <ul>
                { socialData.current.map( ( value, index ) => {
                    return <SocialIcon key={index} social={value} withUsername={withUsername}/>
                })}
            </ul>
        </div>
    )
}

export default SocialLinks;