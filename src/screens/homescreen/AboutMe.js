import React from 'react';
import { UserCard } from '../../components/Cards';
import ContactForm from '../../components/ContactForm';

const AboutMe = props => {

    const user = require("./../../assets/data/aboutme.json");

    return (
        <section className="about-me">
            <h2>
                About me
            </h2>

            <UserCard user={user} isAnimated={true} />

            <div className="what-i-do">
                <h3>
                    What I do
                </h3>
                <p>
                    Simply put, I create interactive and modern websites and web apps.
                    I take care of both front end and back end. Using technologies as
                    React, Vue and Laravel, I'm able to make stunning, functional websites
                    that do exactly what you want them to.
                </p>
            </div>

            <ContactForm title={"Send me a message"}/>
        </section>
    )
}

export default AboutMe;