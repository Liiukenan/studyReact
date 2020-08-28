// applyMiddleware中间件
// compose增强函数
import {createStore,applyMiddleware,compose} from "redux";
//  存储机制，可换localStorage等，当前使用sessionStorage
import {persistStore, persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'

import reducer from './reducers'

// 中间件
import thunk from 'redux-thunk'
const storageConfig = {
    key: 'root', 
    storage:storageSession, // 缓存机制
//blacklist: ['name','age'] // reducer 里不持久化的数据,除此外均为持久化数据
}
const myPersistReducer = persistReducer(storageConfig, reducer); //persist包装reducer
export const store = process.env.NODE_ENV === 'production' ? (
    createStore(myPersistReducer, applyMiddleware(thunk))
) : (
    window.__REDUX_DEVTOOLS_EXTENSION__ ? (
        createStore(myPersistReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()))
    ) : (
        createStore(myPersistReducer, applyMiddleware(thunk))
    )
)
// export const store = createStore(myPersistReducer,enhancer);
// const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);