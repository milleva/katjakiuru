import React, { Component } from 'react';
import TitleBar from './header/TitleBar.jsx'
import DropdownSection from './dropdowns/DropdownSection'
import HomeContent from './MainContent'
import Mediassa from './contents/Mediassa'
import Kuvia from './contents/Kuvia'
import Kirjoituksia from './contents/Kirjoituksia'
import Koulutus from './contents/Koulutus'
import Paloja from './contents/Paloja'
import Kouluttaja from './contents/Kouluttaja'
import './App.css';


class App extends Component {
    constructor(){
        super()
        this.state = {
            MainContent: "home"
        }
    }
    
    setContent = content => {
        this.setState({MainContent: content})
    }
    
    Content = () => {
        if(this.state.MainContent === "home"){
            return <HomeContent/>
        }
        if(this.state.MainContent === "Mediassa"){
            return <Mediassa/>
        }
        if(this.state.MainContent === "Kuvia"){
            return <Kuvia/>
        }
        if(this.state.MainContent === "Kirjoituksia"){
            return <Kirjoituksia/>
        }
        if(this.state.MainContent === "Koulutus"){
            return <Koulutus/>
        }
        if(this.state.MainContent === "Palasina ja kokonaisena, paloja"){
            return <Paloja/>
        }
        if(this.state.MainContent === "Kouluttaja"){
            return <Kouluttaja/>
        }
        
        return null
    }
    
  render() {
    return (
      <div className="App">
          <TitleBar setContent={this.setContent}/>
          <div className={"beef__container"}>
              <this.Content/>
              <DropdownSection setContent={this.setContent}/>
          </div>
          
      </div>
    );
  }
}

export default App;
