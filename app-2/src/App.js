import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      friends: ['Josh', 'Reese', 'Maxwell', 'Christian']
    }
  }

  render() {
    let friendsDisplay = this.state.friends.map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })
    return (
      <div className="App">
        {friendsDisplay}
      </div>
    );
  }
}

export default App;
