import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TimedTransition = ({
    delay,
    duration,
    classNames,
    started,
    children }) => {

    const timeout = useRef(null);
    const playingTimeout = useRef(null);
    const originalClasses = useRef(children.props.className).current;
    const [transformedChildren, setTransformedChildren] = useState(children);

    useEffect(() => {
        if ( started ) {
            if ( timeout.current == null ) {
                timeout.current = setTimeout(() => {
                    startTransition();
                }, delay);
            }
        }

        return () => {
            clearAllTimeouts();
        }
    }, [started]);

    const startTransition = () => {
        playingTimeout.current = setTimeout(() => {
            setTransformedChildren(
                React.cloneElement(children, {className: originalClasses + " " + classNames + " playing done"})
            );
        }, duration);

        setTransformedChildren(
            React.cloneElement(children, {className: originalClasses + " " + classNames + " playing active"})
        );
    }

    const clearAllTimeouts = () => {
        clearTimeout(timeout.current);
        clearTimeout(playingTimeout.current);
        timeout.current = null;
        playingTimeout.current = null;
    }

    return (
        <>
            {transformedChildren}
        </>
    )
}

TimedTransition.propTypes = {
    /** A delay in ms after which the animation will be played on the children. */
    delay: PropTypes.number,
    /** How long, in milliseconds, the animation lasts. */
    duration: PropTypes.number,
    /** Child elements that will be affected by the animation. */
    children: PropTypes.element.isRequired
}

TimedTransition.defaultProps = {
    delay: 0,
    duration: 500,
}

export default TimedTransition;