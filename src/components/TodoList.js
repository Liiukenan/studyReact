import React, { Component } from 'react'
import 'antd/dist/antd.css'
import{Input,Button} from 'antd'
const data=[
    
]
class TodoList extends Component {
    render() {
        return (
            <div style={{margin:'10px'}}>
               <div>
                   <Input placeholder="write"  style={{width:'250px'}}/>
                   <Button type="primary" style={{marginLeft:'10px'}}>增加</Button>
               </div>
            </div>
        );
    }
}
export default TodoList;