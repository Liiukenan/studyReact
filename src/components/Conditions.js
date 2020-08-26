import React, { Component } from 'react'
function UserGreeting(props){
    return <h1>welcome back!</h1>
}
function GuestGreeting(props){
    return <h1>please sign up.</h1>
}
function Greeting(props){
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />
    }
    return <GuestGreeting />
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
class Condition extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick=this.handleLoginClick.bind(this);
        this.handleLogoutClick=this.handleLogoutClick.bind(this);
        this.state={isLoggedIn:false};
    }
    
    handleLoginClick(){
        this.setState({isLoggedIn:true})
    }
    handleLogoutClick(){
        this.setState({isLoggedIn:false})
    }
    render() {
        const isLoggedIn=this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button=<LogoutButton onclick={this.handleLogoutClick}/>
        }else{
            button=<LoginButton onclick={this.handleLoginClick}/>
        }
        return (
            
            <div>
                <Greeting isLoggedIn={true}/>
                {button}
            </div>
        );
    }
}
export default Condition;

