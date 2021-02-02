import { Component } from "react";
import Header from "./Components/Header/Header";
import Loginpage from "./Pages/Login/LoginPage";
import HomePage from "./Pages/Homepage/Homepage";

import { Route, Switch, Redirect } from "react-router-dom";
class App extends Component {
  state = {
    currentUser: null,
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/login"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <Loginpage />
            }
          />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
