import React, { Component } from 'react'
// import {store} from '../store/index.js';
class TodoListUI extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
          <div style={{margin:'10px'}}>
               <div>
                   <input placeholder={this.props.inputValue}  style={{width:'250px'}}
                       onChange={this.props.changeInputValue}
                       value={this.props.inputValue}
                   />
                   <button type="primary" style={{marginLeft:'10px'}} onClick={this.props.clickBtn}>增加</button>
               </div>
               <div style={{margin:'10px'}}>
                <ul>
                    {this.props.list.map((item,index)=><li key={index} 
                    onClick={()=>this.props.deleteItem(index)}>{item}</li>)}
                </ul>
               </div>
            </div>
        );
    }
}

export default TodoListUI;