import React from 'react'

export default class Paloja extends React.Component {
    render() {
        return (
            <div className="maincontent__container">
                <h1>Katja Kiuru - Palasina ja kokonaisena</h1>
    
                <img src={require('../resources/images/kansikuva.jpg')} alt=""/>
            
                <p>Palasina ja kokonaisena ilmestynyt 18.9.2017, Kirjapaja. Saatavilla hyvin varustelluista kulttuurikaupoista.</p>
    
                <div className="kirjatilaisuus__container">
                    <img className="kirjatilaisuus__img" src={require('../resources/images/nimmarien_jako.JPG')} alt=""/>
                    <img className="kirjatilaisuus__img" src={require('../resources/images/kirjan_esittely.JPG')} alt=""/>
                </div>
           </div>
        )
    }
}
