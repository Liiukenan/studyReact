import React from 'react';
// import Toggle from './components/Toggle';
import Condition from './components/Condition';
import './App.css';
function activeLasters(){
  console.log(234243)
}
function App() {
  return (
    <div className="App">
      <button onClick={activeLasters}>
          按钮
      </button>
      {/* <Toggle txt='421342'/> */}
      <Condition />
    </div>
  );
}

export default App;
