import React from 'react'
import DropdownButton from './DropdownButton'

export default class DropdownSection extends React.Component {
    render(){
        return (
            <div className="dropdown__container">
                <DropdownButton options={[]} title={"Teatteritaiteen maisteri / Näyttelijä"}/>
                <DropdownButton options={[]} title={"Keho-orientoitunut psykoterapeutti"}/>
                <DropdownButton options={[]} title={"Esikoiskirjailija"}/>
                <DropdownButton options={[]} title={"Kouluttaja / Luennoitsija"}/>
        </div>
        )
        
    }
}
