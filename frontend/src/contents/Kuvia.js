import React from 'react'

export default class Kuvia extends React.Component {
    render() {
        return (
            <div className="maincontent__container">
                <h2>Kuvia</h2>
    
                <img className="kirjatilaisuus__img" src={require('../resources/images/roolikuva_1.jpg')} alt=""/>
                <br/>
                <div className="kirjatilaisuus__container">
                    <img className="kirjatilaisuus__img" src={require('../resources/images/roolikuva_2.jpg')} alt=""/>
                    <img className="kirjatilaisuus__img" src={require('../resources/images/roolikuva_3.JPG')} alt=""/>
               </div>
            
            </div>
        )
    }
}
