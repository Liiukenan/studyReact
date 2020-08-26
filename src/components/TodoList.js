import React, { Component } from 'react'
import 'antd/dist/antd.css'
// import{Input,Button} from 'antd'
const data=[
    '早上八点开晨会',
    '中午十二点吃饭',
    '晚上七点半回家'
]
class TodoList extends Component {
    render() {
        let list=data.map((number)=><li key={number}>{number}</li>);
        return (
            <div style={{margin:'10px'}}>
               <div>
                   <input placeholder="write"  style={{width:'250px'}}/>
                   <button type="primary" style={{marginLeft:'10px'}}>增加</button>
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