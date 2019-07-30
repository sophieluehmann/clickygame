import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card"
import images from "./image.json"
import Wrapper from "./components/Wrapper"

class App extends Component {

  state = {
    images
  };

  render() {
    return (
      <Wrapper>
      
      {this.state.images.map(image => (
        <Card
          key={image.id}
          image={image.image}
        />
      ))}
    </Wrapper>
      
    );
  }
}

export default App;









/*

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pic1 from './assets/images/facemask.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default class App extends React.Component {
  
  state = {
    Score: ""
  }
 
 handleClick = () => {
    this.setState({
      Score: this.state.Score + 1
    });
  }


  var picArray = [
    require("./assets/images/facemask.jpg"), 
    "./assets/images/hamsom.jpg", 
    "./assets/images/imagination.jpg", 
    "./assets/images/omg.png", 
    "./assets/images/pantsforhire.jpg"
  ];

 
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <img src={picArray[0]}></img>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );


}

*/