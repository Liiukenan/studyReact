import React, { Component } from 'react'
import Child from './Child'
class Parent extends Component {
    constructor(props) {           
       super(props);
       this.state = {
           myNameParent:1234324
       }
    }
    changeText(t){
        // this.setState((state,props)=>{
        //     myNameParent:t
        // })
        this.setState({
            myNameParent:t
        })
    }
    render() {
        return (
            <div>
               <Child    myNameInChild={this.state.myNameParent}  changeText={this.changeText.bind(this)}/>
            </div>
        );
    }
}
export default Parent;