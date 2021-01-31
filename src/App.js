import { Component } from "react";
import Header from "./Components/Header/Header";
import Loginpage from "./Pages/Login/LoginPage";
import HomePage from "./Pages/Homepage/Homepage";
class App extends Component {
  state = {
    currentUser: null,
  };

  render() {
    return (
      <div className="App">
        <Header />
        {/* <Loginpage /> */}
        <HomePage />
      </div>
    );
  }
}

export default App;
