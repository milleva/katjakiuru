import React from 'react'
import logo from './kk4.png';

class TitleBar extends React.Component {
    constructor(){
        super()
        this.state = {
            showContact: false,
            showCV: false
        }
    }
    
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="title_wrapper">
                    <h1 title="Etusivu" onClick={() => this.props.setContent("home")} className="App-title">Katja Kiuru</h1>
                    <p className="subtitle">Näyttelijä, kirjailija, kehopsykoterapeutti</p>
                </div>
                <TopLinks onClickContact={() => this.showContact()} onClickCV={() => this.showCV()}/>
                {this.state.showContact &&
                <div className="contact">
                    <p>Email: <a style={{color: "whitesmoke"}} href = "mailto: katjakiuru@gmail.com">katjakiuru@gmail.com</a></p>
                    <p>Tel: +358 40 812 6244</p>
                </div>}
                {this.state.showCV &&
                <div className="cv">
                    <p>CV</p>
                    <div className="cv-link__container">
                        <a className="cv-link" target="_blank" href="https://evanarkko.github.io/web/viewer.html?file=CV_Psykoterapeutti.pdf">Näyttelijänä</a>
                        <a className="cv-link" target="_blank" href="https://evanarkko.github.io/web/viewer.html?file=CV_Psykoterapeutti.pdf">Psykoterapeuttina</a>
                    </div>
                </div>}
            </header>)
    }
    
    showContact = () => {
        this.setState({showContact: true, showCV: false})
        setTimeout(() => {this.setState({showContact: false})}, 8000)
    }
    showCV = () => {
        this.setState({showCV: true, showContact: false})
        setTimeout(() => {this.setState({showCV: false})}, 8000)
    }
}

const TopLinks = ({onClickContact, onClickCV}) =>
    <div className="top-links">
        <a className="top-link" target="_blank"
           href="http://evanarkko.github.io/layouts/ansioluetteloNavigator.html">Ansioluettelo</a>
        |
        <a className="top-link" target="_blank" href="http://evanarkko.github.io/layouts/blogi.html">Blogi</a>
        |
        <span onClick={onClickContact} className="top-link">Ota yhteyttä</span>
        |
        <span onClick={onClickCV} className="top-link">CV</span>
    </div>


export default TitleBar
