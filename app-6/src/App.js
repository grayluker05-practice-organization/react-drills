import React, { Component } from "react";
import Todo from './Components/Todo';
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
      input: ''
    }
  }

  handleChange = (val) => {
    this.setState({
      input: val
    })
  }

  handleAdd = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    let myList = this.state.list.map((e, i) => <Todo key={i} task={e}/>)
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input 
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleChange(e.target.value)}/>
          <button onClick={}>Add</button>
        </div>
        <br />
        {myList}
      </div>
    );
  }
}

export default App;
