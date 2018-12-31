import React from 'react'

export default class Mediassa extends React.Component {
    render() {
        return (
            <div className="maincontent__container">
                <h1>Palasina ja kokonaisena</h1>
    
                <h3>Mediassa</h3>
                
                <ul>
                    <li>
                        <a target="_blank" href="https://www.verkkouutiset.fi/jouko-turkan-kouluttama-nayttelijatar-paljastaa-vasta-nyt-teatterivaikuttajan-avoimen-sadismin/">Verkkouutiset</a>, Markku Jokipii, 10.12.2017
                    </li>
                    <li>
                        <a target="_blank" href="http://kirjasta-kirjaan.blogspot.com/2017/11/katja-kiuru-palasina-ja-kokonaisena.html">Kirjasta kirjaan -blogi</a>, Hannele Salminen, 26.11.2017
                    </li>
                    <li>
                        <a target="_blank" href="https://areena.yle.fi/1-4247613">Yle Puheen Nosto -ohjelma</a>,  17.10.2017, toimittajat Linda Vettanen ja Miia Krause
                    </li>
                </ul>
                <img className="mediaImg" src={require("../resources/images/kirja-arvio_karjalainen_kiuru.JPG")} alt=""/>
                <img className="mediaImg" src={require("../resources/images/arvostelu-001.jpg")} alt=""/>
            
            </div>
        )
    }
}
