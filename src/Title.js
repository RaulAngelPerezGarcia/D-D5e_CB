import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log("hi form title");
    return (
      <div>
        <h1>{this.props.headline}</h1>
      </div>
    );
  }
}

export default App;
