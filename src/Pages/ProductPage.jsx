import { withStyles } from '@material-ui/core';
import React, { Component } from 'react'
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';


const styles={
  productListContainer: {
    height: "97vh",
    width: "99vw",
  },

}
class ProductPage extends Component {
  render() {
    const {classes}=this.props;

    return (
      <div className={classes.productListContainer}>
        <Header/>
        <ProductDetails />
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(ProductPage));

