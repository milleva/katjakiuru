import React from 'react'
import logo from './kk5.png';

class TitleBar extends React.Component {
    constructor(){
        super()
        this.state = {
            showContact: false
        }
    }
    
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="title_wrapper">
                    <h1 className="App-title">Katja Kiuru</h1>
                    <p className="subtitle">Näyttelijä, kirjailija, kehopsykoterapeutti</p>
                </div>
                <TopLinks onClick={() => this.showContact()}/>
                {this.state.showContact &&
                <div className="contact">
                    <p>Email: katjakiuru@gmail.com</p>
                    <p>Tel: +358 40 812 6244</p>
                </div>}
            </header>)
    }
    
    showContact = () => {
        this.setState({showContact: true})
        setTimeout(() => {this.setState({showContact: false})}, 8000)
    }
}

const TopLinks = ({onClick}) =>
    <div className="top-links">
        <a className="top-link" target="_blank"
           href="http://www.katjakiuru.org/layouts/ansioluetteloNavigator.html">Ansioluettelo</a>
        |
        <a className="top-link" target="_blank" href="http://evanarkko.github.io/layouts/blogi.html">Blogi</a>
        |
        <span onClick={onClick} className="top-link">Ota yhteyttä</span>
    </div>


export default TitleBar
