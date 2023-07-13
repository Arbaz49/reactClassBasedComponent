import { withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import { handleGetDataFromApi } from '../services/ApiCalls'
const styles={
    productListContainer: {
        height: "97vh",
        width: "99vw",
      },
}
class HomePage extends Component {
    constructor(props){
        super(props)
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
    const {classes}=this.props
    return (
      <div className={classes.productListContainer}>
              <Header />
              <div>
                <ProductList data={this.state.apiData} />
              </div>
            </div>
    )
  }
}
export default withStyles(styles)(HomePage)