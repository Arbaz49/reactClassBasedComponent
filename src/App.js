import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import HomePage from "./Pages/HomePage";

const styles = {
  productListContainer: {
    height: "97vh",
    width: "99vw",
  },
  clickButton: {
    padding: "2px 10px",
    color: "white",
    backgroundColor: "black",
    cursor: "pointer",
    fontSize: "20px",
    borderRadius: "8px",
  },
};
class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    // const { classes } = this.props;
    return (
      <Router>
        <Switch>
        <Route
          exact
          path="/"
          component={ HomePage}
        ></Route>
        <Route
          path="/product/:productId"
          component={ProductPage }
        ></Route>
        </Switch>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
