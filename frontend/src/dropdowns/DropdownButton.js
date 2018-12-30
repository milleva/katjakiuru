import React from "react"
import classNames from "classnames"
import "../css/Dropdown.css"

export default class DropdownButton extends React.Component {
    constructor() {
        super()
        this.state = {
            selected: false,
            selectedIndex: null
        }
    }
    
    collapse = () => {
        this.setState({selected: false})
    }
    
    render(){
        return(
            <div tabIndex="0" onBlur={this.collapse}
                 className={classNames("secondary-dropdown", {"secondary-dropdown--selected": this.state.selected})}
                 onClick={e => {
                     e.stopPropagation()
                     this.setState({selected: !this.state.selected})
                 }}>
                <div className="secondary-dropdown__title">
                    <span>{this.props.title}</span>
                </div>
                {
                    this.state.selected &&
                    <div className="secondary-dropdown__item-container">
                        {this.props.options
                            .filter((x, index) => this.props.time ? true : index !== this.state.selectedIndex)
                            .map((item) =>
                                <div
                                    key={item}
                                    className="secondary-dropdown__item"
                                    onClick={() => {
                                        this.setState({selectedIndex: this.props.options.indexOf(item)})
                                        this.props.dispatcher(item)
                                    }}
                                >{item}</div>)}
                    </div>
                }
            
            </div>
        )
    }
    
}
