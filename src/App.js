import React from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from "./components/Home";
import './assests/App.css'
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/Store";
class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
      <Router>
        <Switch>
          <Route exact path='/' component={Home}  />
          <Route  path='/login' component={Login}  />
          </Switch>
      </Router>
     </Provider>
    );
  }
}

export default App;