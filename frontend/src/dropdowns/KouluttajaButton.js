import React from 'react'

export default class KouluttajaButton extends React.Component {
    render() {
        return (
            <div className="kouluttajaButton" onClick={() => this.props.setContent("Kouluttaja")}>Kouluttaja / Luennoitsija</div>
        )
    }
}
