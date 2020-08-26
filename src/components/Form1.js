import React, { Component } from 'react'
class Form  extends Component {
    constructor(props) {           
       super(props);
       this.state = {
           value:['B', 'C']
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
      handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('提交的名字: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                {/* <form onSubmit={this.handleSubmit}>
                    <label>
                    名字:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    
                     <textarea name="" value={this.state.value} onChange={this.handleChange} id="" cols="30" rows="10"></textarea>
                    </label>
                    <input type="submit" value="提交" />
                </form> */}


                 <form onSubmit={this.handleSubmit}>
                    <label>
                    选择你喜欢的风味:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                        {/* <select name="" multiple={true} value={this.state.value} id="" onChange={this.handleChange}>
                            <option value="A">葡萄柚</option>
                        <option value="B">酸橙</option>
                        <option value="C">椰子</option>
                        <option value="D">苹果</option>
                        </select> */}
                    </label>
                    <input type="submit" value="提交" />
                </form>
            </div>
        );
    }
}
export default Form;