import React from 'react';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor} from './store/index'
// import {Provider} from 'react-redux';
// import {createStore} from 'redux'
// import todoApp from './store/todos'
// import './store/index'
// let store=createStore(todoApp)
// import Toggle from './components/Toggle';
// import List from './components/List';
// import Condition from './components/Condition';
// import Form from './components/Form';
// import Calculator from './components/Calculator';
// import Parent from './components/Parent';
// import Fragment from './components/Fragment';
// import MyContext from "./components/MyContext"
// import HookExample from "./components/HookExample"
import TodoList from "./components/TodoList"
// import './App.css';
// export const {Provider,Consumer} = React.createContext("kenan");

function App() {
  // let name="kenan"
  return (
    //  <Provider store={store}>
        <div className="App">
          {/* <button onClick={activeLasters}>
              按钮
          </button> */}
          {/* <Toggle txt='421342'/> */}
          {/* <Condition unreadMessages={['red','orange','yellow','green']}/> */}
          {/* <List /> */}
          {/* <Form name="1234"/> */}
          {/* <Calculator /> */}
          {/* <Fragment /> */}
          {/* <Parent /> */}
          {/* <Provider value={name}>
                    <div style={{border:'1px solid red',width:'30%',margin:'50px auto',textAlign:'center'}}>
                        <p>父组件定义的值:{name}</p>
                      <MyContext />
                    </div>
                </Provider> */}
          {/* <HookExample /> */}
              <PersistGate persistor={persistor}>
                   <TodoList />
              </PersistGate>
         
        </div>
    // </Provider>
  );
}

export default App;
