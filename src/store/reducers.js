import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionType';
import * as _ from 'lodash'
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

  // if(action.type===CHANGE_INPUT){
  //   let newState=JSON.parse(JSON.stringify(state));
  //   newState.inputValue=action.value;
  //   return newState;
  // }
   switch (action.type) {
    case CHANGE_INPUT:
      let changeInputStates=_.cloneDeep(state);
      changeInputStates.inputValue=action.value;
      return changeInputStates;
    case ADD_ITEM:
      let newStates= _.cloneDeep(state);
      newStates.list.push(state.inputValue);
      return newStates;
    case DELETE_ITEM:
      let newState= _.cloneDeep(state);
      newState.list.splice(action.index,1);
      return newState;
    default:
      return state
  }
  // if(action.type===ADD_ITEM){
  //   let newState=JSON.parse(JSON.stringify(state));
  //   newState.list.push(newState.inputValue);
  //   return newState;
  // }
  //  if(action.type===DELETE_ITEM){
  //   let newState=JSON.parse(JSON.stringify(state));
  //   newState.list.splice(action.index,1)
  //   return newState;
  // }
  // return state;
}