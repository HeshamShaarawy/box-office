import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import userService from "./utils/userService";
import eventService from "./utils/eventService"
import EventPage from "./pages/EventPage/EventPage";
import EventsList from "./components/Events/events-list.component";
import CreateEvent from "./components/Events/create-event.component";
import CreatePerson from "./components/Events/create-person.component";
import EditEvent from "./components/Events/edit-event.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      events: []
    };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  async componentDidMount() {
    await this.getEvents();
  }

 getEvents = async () => {
    const events = await eventService.index();
    console.log('events', events)
    this.setState({ events });
  };


  render() {
    const { user, events } = this.state;
    return (
      <Router>
        <div className="App">
          <header className="container-fluid">
            <NavBar user={user} handleLogout={this.handleLogout} />
          </header>
          <main class="container-fluid">
            <Switch>
              <Route exact path="/" render={() => <EventPage events={events}/>} />
              <Route exact path="/events" render={() => <EventsList events={events}/>} />
              <Route exact path="/create" render={() => <CreateEvent events={events}/>} />
              <Route exact path="/person" render={() => <CreatePerson/>} />
              {/* <Route exact path="/edit/:id"  render={() => <EditEvent />} /> */}
              <Route path="/edit/:id" component={EditEvent} />
              <Route
                exact
                path="/signup"
                render={({ history }) => (
                  <SignupPage
                    history={history}
                    handleSignupOrLogin={this.handleSignupOrLogin}
                  />
                )}
              />
              <Route
                exact
                path="/login"
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
