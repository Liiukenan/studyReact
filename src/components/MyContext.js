import React, { Component } from 'react'
import { Consumer } from "../App"
class MyContext extends Component {
    constructor(props) {           
       super(props);
       this.state = {
           defalut:112233
       }
    }
    render() {
        return (
               <Consumer>
                    {( name ) =>
                        <div style={{ border: '1px solid blue', width: '60%', margin: '20px auto', textAlign: 'center' }}>
                            <p>子组件。获取父组件的值:{name}</p>
                            {/* 孙组件内容 */}
                    </div>
                    }
                </Consumer>
        );
    }
}
export default MyContext;