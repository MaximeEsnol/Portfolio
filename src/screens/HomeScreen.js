import React from 'react';
import useTitle from '../hooks/useTitle';

const HomeScreen = props => {

    useTitle("Maxime Esnol");

    return (
        <div>
            <h1>Maxime Esnol</h1>
            <p>I create websites that are memorable, beautiful and easy to use.</p>
        </div>
    )
}

export default HomeScreen