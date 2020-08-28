import React, { Component } from 'react'
import {store} from '../store/index.js';
import {changeInputAction,addItemAction,deleteItemAction,getTodoList} from '../store/actionCreators'
import TodoListUI from './TodoListUI'
class TodoList extends Component {
     constructor(props){
            super(props)
            this.state=store.getState()
            this.changeInputValue=this.changeInputValue.bind(this);
            this.clickBtn=this.clickBtn.bind(this);
            this.storeChange=this.storeChange.bind(this);
            this.deleteItem=this.deleteItem.bind(this);
        }
    deleteItem(index){
        const action=deleteItemAction(index);
        store.dispatch(action)
    }
    componentDidMount(){
        const action=getTodoList();
        store.dispatch(action);
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
        store.subscribe(this.storeChange);
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        );
    }
}
export default TodoList;