import React, { useRef } from 'react';
import SocialIcon from './SocialIcon';

const SocialLinks = props => {

    const socialData = useRef( require("./../assets/data/social.json") );

    return(
        <div className="social-links">
            <ul>
                { socialData.current.map( ( value, index ) => {
                    return <SocialIcon key={index} social={value}/>
                })}
            </ul>
        </div>
    )
}

export default SocialLinks;