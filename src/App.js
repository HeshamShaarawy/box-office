import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import userService from "./utils/userService";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
    };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  render() {
    const { user } = this.state;
    return (
      <Router>
      <div className="App">
        <header className="container-fluid">
          <NavBar user={user} handleLogout={this.handleLogout} />
        </header>
        <main class="container-fluid">
          <Switch>
            <Route
              exact path="/signup"
              render={({ history }) => (
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
          </Switch>
        </main>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
