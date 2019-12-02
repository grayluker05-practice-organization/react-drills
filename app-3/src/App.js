import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      filterString: '',
      friends: ['Josh', 'Reese', 'Maxwell', 'Christian']
    }
  }

  handleFilter = (filter) => {
    this.setState({
      filterString: filter
    })
  }

  render() {
    let friendsToDisplay = this.state.friends.filter(e => {
      return e.includes(this.state.filterString)
    }).map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })
    return (
      <div className="App">
        <input onChange={e => this.handleFilter(e.target.value)}/>
       {friendsToDisplay}
      </div>
    );
  }
}

export default App;
