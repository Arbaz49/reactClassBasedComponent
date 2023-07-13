import { Box, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";


const styles={
    productDiv:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      },
    productImage:{
        height:"300px",
        width:"300px"

    }
}


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, images, price} = this.props?.Product;
    const {classes}=this.props

    return (
      <Box className={classes.productDiv}>
        <Typography>{title}</Typography>
        <img src={images[1]} className={classes.productImage} alt="product" />
        <Typography>₹{price} only/-</Typography>
      </Box>
    );
  }
}
// export default Product;
export default withStyles(styles)(Product);

