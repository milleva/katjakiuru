import React from 'react'

export default class MainContent extends React.Component {
    render() {
        return (
            <div className="maincontent__container">
                <h2> Katja Kiuru</h2>
                
                <p>
                    Katja Kaarina Kiuru-Miller (s. 21. elokuuta 1965 Helsinki) opiskeli näyttelijäntyön linjallla
                    Teatterikorkeakoulussa 1984-88. Tampereen Työväen Teatterin kiinnityksen jälkeen Kiuru jättäytyi
                    vapaaksi näyttelijäksi. Töiden ohella Kiuru jatkoi näyttelijäntaiteen opintoja stanislavskilaisessa
                    koulutuksessa Lontoossa, klovneriaa sekä intuitio- ja rituaaliteatteria työpajoissa Baltiassa ja
                    Keski-Euroopassa, Venäjällä, Intiassa ja Kuubassa.
                </p>
                <p>
                    Näyttämö- ja radioroolien ohella Katja Kiuru on esiintynyt monissa suomalaisissa televisiosarjoissa
                    ja elokuvissa.
                </p>
                <p>
                    Katja Kiuru-Miller on Valviran akreditoima erityistason psykoterapeutti. Hän opiskeli
                    keho-orientoitunutta psykoterapiaa Suomen Luonneanalyyytisen vegetoterapiayhdistyksen, sittemmin
                    Kehopsykoterapiayhdistys ry., koulutuksessa vuosina 1999-2003.
                </p>
    
                <a href="">
                    <img className="social" src={require('./resources/images/linkedin.png')} alt="wtf"/>
                </a>
                <a href="">
                    <img className="social" src={require('./resources/images/IMDB-Icon.png')} alt="wtf"/>
                </a>
            </div>
        )
    }
}
