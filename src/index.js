import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// let fetchPosts=new Promise((resolve,reject)=>{
//   resolve({posts:[1,2,3,4]})
// });
// let fetchComments=new Promise((resolve,reject)=>{
//   resolve({comments:[5,6,7]})
// });

// class Clock extends React.Component{
//   constructor(props){
//     super(props);
//     // this.state={date:new Date(),counter:2}
//     this.state={
//       posts:[],
//       comments:[]
//     }
//   }
//   componentWillUnmount(){
//     // clearInterval(this.timerID)
//     console.log(this.state)
//   }
//   componentDidMount(){
//     // 插入后调用
//     // this.timerID=setInterval(()=>this.tick(),1000)
//     // this.tick();
//     fetchPosts.then(response=>{
//       this.setState({
//         posts:response.posts
//       })
//     })
//     fetchComments.then(response=>{
//       this.setState({
//         comments:response.comments
//       })
//       // console.log(this.state);
   
//     })
    

//   }
//   // render(){
//     // return(
//       // <div>
//       //   <h1>
//       //     hello,world!
//       //   </h1>
        
//       //   <h2>It is {this.state.comments}</h2>
//       // </div>
//     // )
//   // }
//   // tick(){
//     // 设置状态
//     // this.setState({
//     //   date:new Date()
//     // })
//     // this.setState((state,props)=>{
//     //   // counter:234
//     //   console.log(props)
//     //   console.log(state)
//     // })
//   // }
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// )
