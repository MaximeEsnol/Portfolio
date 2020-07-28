import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedApp from './AnimatedApp';

function App() {
    return (
        <Router>
            <AnimatedApp/>
        </Router>
    );
}

export default App;
