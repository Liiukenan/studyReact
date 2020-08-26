import React, { Component,Fragment} from 'react'

function ListItem({ item }) {
  return (
    <Fragment>
      <li>{item.term}</li>
      <li>{item.description}</li>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <ul>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
class Fragments extends Component {
    constructor(props) {           
       super(props);
       this.state = {}
    }
    render() {
        return (
            <div>
                {/* <ListItem /> */}
               <Glossary items={[{'id':234,term:413,description:11111}]}/>
            </div>
        );
    }
}
export default Fragments;