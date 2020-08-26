import React, { Component } from 'react'


class List extends Component {
    constructor(props) {           
       super(props);
       this.state = {}
    }
    render() {
        const numbers=[1,2,3,4,5];
        // const doubled=numbers.map((n,index)=><li key={n.toString()}>{n}</li>)
        return (
            <div>
                <ul>
                    {numbers.map((n)=><li key={n.toString()}>{n}</li>)}
                </ul>
               
            </div>
        );
    }
}
export default List;