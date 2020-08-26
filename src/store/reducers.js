const defaultState={
  inputValue:'write something',
  list:[
    '早上八点开晨会',
    '中午十二点吃饭',
    '晚上七点半回家'
  ]
};
export default (state=defaultState,action)=>{
  // reducer里只能接收state，不能改变state
  if(action.type==='changeInput'){
    let newState=JSON.parse(JSON.stringify(state));
    newState.inputValue=action.value;
    return newState;
  }
  return state;
}