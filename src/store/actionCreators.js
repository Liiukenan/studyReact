import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionType'
export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value
})
export const addItemAction=(value)=>({
    type:ADD_ITEM,
})
export const deleteItemAction=(index)=>({
    type:DELETE_ITEM,
    index
})
export const getListACtion=(data)=>({
    type:GET_LIST,
    data
})