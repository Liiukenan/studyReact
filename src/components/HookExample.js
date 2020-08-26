import React, { useState,Component,useEffect } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  useEffect(() => {
    //   document.title=`我爱你${count}次`;
    //  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    console.log(2);
    return () => {
      // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      console.log(3);
    };
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    
    </div>
  );
}
// function ExampleWithManyStates() {
//   // 声明多个 state 变量！
//   const [age, setAge] = useState(42);
// //   const [fruit, setFruit] = useState('banana');
// //   const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
//   return(
//       <div>
//           <p>you clicked {age} times</p>
//           <button onClick={() => setAge(age + 1)}>
//                 Click me
//         </button>
//       </div>
//   )
// }
class HookExample extends Component {
    constructor(props) {           
       super(props);
       this.state = {}
    }
    render() {
        return (
            <div>
               <Example />
               {/* <ExampleWithManyStates /> */}
            </div>
        );
    }
}
export default HookExample;
