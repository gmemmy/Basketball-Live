import React, { Component } from "react";
import "./App.css";
import Home from './sreens/home';
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
    render () {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default hot(module)(App);
