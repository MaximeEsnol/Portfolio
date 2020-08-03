import React from 'react';

const Timeline = ( { children } ) => {

    return(
        <div className="timeline">
            <div className="timeline-line-start timeline-line-part"></div>
            { children }
            <div className="timeline-line-end timeline-line-part"></div>
        </div>
    )
}

export const TimelineEntry = ( { date, title, children } ) => {
    return (
        <div className="timeline-entry">
            <div className="timeline-entry-date">
                {date}
            </div>
            <div className="timeline-entry-content">
                <h2>{title}</h2>
                <p>
                    {children}
                </p>
            </div>
        </div>
    )
}

export default Timeline;