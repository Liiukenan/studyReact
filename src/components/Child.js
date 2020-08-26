import React, { Component } from 'react'
class Child extends Component {
    constructor(props) {           
       super(props);
       this.state = {
           
       }
       this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.props.changeText(2223344);
    }
    render() {
        return (
            <div>
                {this.props.myNameInChild}
                <button onClick={this.handleClick}>
                    修改
                </button>
            </div>
        );
    }
}
export default Child;