import React from 'react'
const TodoListUI=(props)=>{
     return (
          <div style={{margin:'10px'}}>
               <div>
                   <input placeholder={props.inputValue}  style={{width:'250px'}}
                       onChange={props.changeInputValue}
                       value={props.inputValue}
                   />
                   <button type="primary" style={{marginLeft:'10px'}} onClick={props.clickBtn}>增加</button>
               </div>
               <div style={{margin:'10px'}}>
                <ul>
                    {props.list.map((item,index)=><li key={index} 
                    onClick={()=>props.deleteItem(index)}>{item}</li>)}
                </ul>
               </div>
            </div>
        );
}

export default TodoListUI;