import React from 'react';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true,txt:props.txt};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.setState((state) => ({
    //   isToggleOn: !state.isToggleOn,
    // }));
    // console.log(this.state)

    console.log(this);
  }

  render() {
    return (
      // <button onClick={this.handleClick}>
      //   {this.state.isToggleOn ? 'ON' : 'OFF'}
      // </button>
    );
  }
}
export default Toggle;
