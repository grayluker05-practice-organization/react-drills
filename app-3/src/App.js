import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      friends: ['Josh', 'Reese', 'Maxwell', 'Christian'],
      filteredFriends: ''
    }
  }

  handleFilter = (val) => {
    this.setState({
      filteredFriends: val
    })
  }

  render() {
    let friendsToDisplay = this.state.friends.filter((e, i) => {
      return e.includes(this.state.filteredFriends);
    }).map((e, i) => <h2 key={i}>{e}</h2>)
    return (
      <div className="App">
        <input onChange={e => this.handleFilter(e.target.value)}/>
        {friendsToDisplay}
      </div>
    );
  }
}

export default App;
