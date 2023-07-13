import { AppBar, Button, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
// import MenuIcon from '@material-ui/icons/Menu';
const styles={
    root: {
      flexGrow: 1,
      marginBottom:"20px"
    },
    menuButton: {
    },
    title: {
      flexGrow: 1,
    },
  }
class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            text:""
        }
    }
  render() {
    const {classes}=this.props
    
    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {}
            </Typography>
            <Button color="inherit">{}</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
export default withStyles(styles)(Header);
