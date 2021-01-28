import { Component } from "react";

import Login from "./Components/Login/Login"; //temp
class App extends Component {
  state = {
    currentUser: null,
  };

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
