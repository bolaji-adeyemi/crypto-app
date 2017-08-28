import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
injectTapEventPlugin();

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {open: false};
  }
  render() {
    return (
      <div className="App">
       <AppBar
    title="Cryptogene"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={(event) => this.setState({open: !this.state.open })}
  />
     <Drawer open={this.state.open}
     docked={false}
     onRequestChange={(open) => this.setState({open})}
     >
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>ICO</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
