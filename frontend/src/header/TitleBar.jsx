import React from 'react'
import logo from './kk2.png';

const TitleBar = () =>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="title_wrapper">
            <h1 className="App-title">Katja Kiuru</h1>
            <p className="subtitle">Näyttelijä, kirjailija, kehopsykoterapeutti</p>
        </div>
    </header>

export default TitleBar
