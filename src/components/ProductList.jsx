import React, { Component } from "react";
import Product from "./Product";
import { withStyles } from "@material-ui/core";
import { handleGetDataFromApi } from "../services/ApiCalls";
const styles={
productContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    width: "100%",
    margin: "auto",
    justifyContent: "center"
  }
}

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],

    };
  }
  componentDidMount() {
    const data=handleGetDataFromApi()
        this.setState({
            apiData:data   
      });
  }

  render() {
    const{classes}=this.props
    return (
      <>
        <div
          className={classes.productContainer}
        >
          { this.state.apiData && this.state.apiData.map((ele) => {
            return <Product  key={ele.id} Product={ele} />;
          })}
        </div>
      </>
    );
  }
}
export default withStyles(styles)(ProductList);

