import {createStore} from "redux";
import reducer from './reducers'
import { devToolsEnhancer } from 'redux-devtools-extension';
//  存储机制，可换localStorage等，当前使用sessionStorage
import {persistStore, persistReducer} from 'redux-persist';

import storageSession from 'redux-persist/lib/storage/session'
const storageConfig = {
    key: 'root', 
    storage:storageSession, // 缓存机制
//blacklist: ['name','age'] // reducer 里不持久化的数据,除此外均为持久化数据
}
const myPersistReducer = persistReducer(storageConfig, reducer); //persist包装reducer
export const store = createStore(myPersistReducer,devToolsEnhancer());
// const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);