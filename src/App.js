import { Component } from "react";
import Header from "./Components/Header/Header";
import Loginpage from "./Pages/Login/LoginPage";
class App extends Component {
  state = {
    currentUser: null,
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Loginpage />
      </div>
    );
  }
}

export default App;
