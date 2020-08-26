import React, { Component } from 'react'
class Form extends Component {
    constructor(props) {           
       super(props);
       this.state = {
           isGoing:false,
           numberOfGuests:2
       }
       this.handleInputChange=this.handleInputChange.bind(this);
       this.handleLabelClick=this.handleLabelClick.bind(this);
    }
    handleInputChange(event){
        const target=event.target;
        const value=target.name==='isGoing'?target.checked:target.value;
        const name=target.name;
        this.setState({
            name:value
        })
    }
    handleLabelClick(e){
        this.setState((state,props)=>({
            isGoing:!state.isGoing
        }))
    }
    render() {
        return (
            <form action="">
                <label htmlFor="" onClick={this.handleLabelClick}>
                参与:
                    <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label htmlFor="">
                    来宾人数:
                    <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
                </label>
            </form>
        );
    }
}
export default Form;