import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getSingleProductData } from "../services/ApiCalls";
// styles start
const styles = {
  productDetailsContainer: {
    display: "flex",
    gap: "50px",
    padding: "1%",
  },
  productimage: {
    width: "46vw",
    height: "500px",
    display: "flex",
    gap: "20px",
  },
  image: {
    height: "40rem",
    width: "35rem",
    borderRadius: "4px",
  },
  smallImages: {
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  smallImage: {
    height: "10rem",
    width: "10rem",
    cursor: "pointer",
    borderRadius: "3px",
  },
  productDetailsDiv: {
    display: "flex",
    flexDirection: "column",
  },
};
// styles end

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: {},
      productId: this.props.match.params.productId,
      selectedImageId: 0,
    };
  }

  handleImageClick = (index) => {
    this.setState({
      selectedImageId: index,
    });
  };

  componentDidMount() {
    const {productId}=this.props.match.params;
  const data=  getSingleProductData(productId);
    this.setState({
      productDetails:data
    });
  }

  render() {
    const { classes } = this.props;
    const { images, title, price, category, description } =
      this.state.productDetails;
    return (
      <div className={classes.productDetailsContainer}>
        <div className={classes.productimage}>
          <div className={classes.smallImages}>
            {images?.map((img, index) => {
              return (
                <img
                  onClick={() => this.handleImageClick(index)}
                  className={classes.smallImage}
                  src={img}
                  alt="productImage"
                />
              );
            })}
          </div>

          <img
            className={classes.image}
            src={images && images[this.state.selectedImageId]}
            alt=""
          />
        </div>
        <div className={classes.productDetailsDiv}>
          <h1 style={{fontFamily:"sans-serif",fontSize:"40px"}}>{title}</h1>
          <h4>{price}</h4>
          <p>{description}</p>
          <div className="category">
            <h3>{category?.name}</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(withRouter(ProductDetails));
