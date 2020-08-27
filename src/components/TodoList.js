import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {store} from '../store/index.js';
import {changeInputAction,addItemAction,deleteItemAction} from '../store/actionCreators'
// import{Input,Button} from 'antd'
// const data=[
//     '早上八点开晨会',
//     '中午十二点吃饭',
//     '晚上七点半回家'
// ]
class TodoList extends Component {
     constructor(props){
            super(props)
            this.state=store.getState()
            this.changeInputValue=this.changeInputValue.bind(this);
            this.clickBtn=this.clickBtn.bind(this);
            this.storeChange=this.storeChange.bind(this);
        }
    deleteList(index){
        const action=deleteItemAction(index);
        console.log(action);
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState());
    }
    clickBtn(){
        const action=addItemAction();
        store.dispatch(action)
    }
    changeInputValue(e){
        const action=changeInputAction(e.target.value);
        store.dispatch(action);
    }
    render() {
        let list=this.state.list.map((item,index)=><li key={index} onClick={this.deleteList.bind(this,index)}>{item}</li>);
        store.subscribe(this.storeChange);
        return (
            <div style={{margin:'10px'}}>
               <div>
                   <input placeholder={this.state.inputValue}  style={{width:'250px'}}
                       onChange={this.changeInputValue}
                       value={this.state.inputValue}
                   />
                   <button type="primary" style={{marginLeft:'10px'}} onClick={this.clickBtn}>增加</button>
               </div>
               <div style={{margin:'10px'}}>
                <ul>
                    {list}
                </ul>


               </div>
            </div>
        );
    }
}
export default TodoList;