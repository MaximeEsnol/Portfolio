import React, { useRef, useState } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import TimedTransition from './TimedTransition';
import SocialLinks from './SocialLinks';

export const UserCard = ({ user, isAnimated = false }) => {

    const publicDir = useRef(process.env.PUBLIC_URL).current;
    const [hasBeenVisible, setHasBeenVisibile] = useState(false);

    const onVisibilityChange = isVisible => {
        if (!hasBeenVisible && isVisible) {
            setHasBeenVisibile(true);
        }
    }

    return (
        <ReactVisibilitySensor
            partialVisibility
            offset={{ bottom: 20 }}
            onChange={visibility => onVisibilityChange(visibility)}
        >
            <TimedTransition
                started={hasBeenVisible}
                delay={250}
                duration={1000}>
                <div className="card user animated">
                    <div className="photo-container animated">
                        <TimedTransition
                            started={hasBeenVisible}
                            delay={750}
                            duration={500}>
                            <img src={publicDir + "/images/" + user.photo}
                                className="profile-photo"
                                alt=""
                                width={72}
                                height={72} />
                        </TimedTransition>

                    </div>
                    <div className="card__content">
                        <h3>
                            {user.name}
                        </h3>
                        <p>
                            {user.bio}
                        </p>
                    </div>
                    <SocialLinks withUsername={true} />
                </div>
            </TimedTransition>
        </ReactVisibilitySensor>

    )
};