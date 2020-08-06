import React, { useRef, useState } from 'react';
import useTitle from '../hooks/useTitle';
import Timeline, { TimelineEntry } from './experiencescreen/Timeline';
import TimedTransition from '../components/TimedTransition';
import ReactVisibilitySensor from 'react-visibility-sensor';

const ExperienceScreen = props => {

    useTitle("Experience - Maxime Esnol");

    const entries = useRef(require("./../assets/data/experience.json")).current;

    const entriesSorted = entries.sort( (a, b) => new Date(b.date) - new Date(a.date) );

    return(
        <section className="experience">
            <h1>My experience</h1>

            <Timeline>
            { entriesSorted.map( ( entry, index ) => {
                let date = new Date(entry.date);
                let year = date.getFullYear();
                let month = date.toLocaleString('en', {month: 'short'});
                let day = date.getDate();
                return (
                        <TimelineEntry key={index} 
                        date={"" + day + " " + month + " " + year} 
                        title={entry.title}>
                            {entry.content}
                        </TimelineEntry>
                    )
            }) }
            </Timeline>
        </section>
    )
}

export default ExperienceScreen;