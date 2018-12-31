import React from 'react'
import DropdownButton from './DropdownButton'
import KouluttajaButton from './KouluttajaButton'

export default class DropdownSection extends React.Component {
    render(){
        return (
            <div className="dropdown__container">
                <DropdownButton options={['Kuvia', 'Kirjoituksia']} title={"Teatteritaiteen maisteri / Näyttelijä"} setContent={this.props.setContent}/>
                <DropdownButton options={['Koulutus']} title={"Keho-orientoitunut psykoterapeutti"} setContent={this.props.setContent}/>
                <DropdownButton options={['Palasina ja kokonaisena, paloja', 'Mediassa']} title={"Esikoiskirjailija"} setContent={this.props.setContent}/>
                <KouluttajaButton  setContent={this.props.setContent}/>
        </div>
        )
        
    }
}
