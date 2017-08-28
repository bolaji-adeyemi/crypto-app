import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FontIcon from 'material-ui/FontIcon';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500, green300, grey900} from 'material-ui/styles/colors';


const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

injectTapEventPlugin();
const muiTheme = getMuiTheme({
  palette: {
    primary1Color:grey900,
  },
  appBar: {
    height: 50,
  },
});


class App extends Component {
    constructor(props) {
    super(props);
    this.state = {open: false, selectedIndex: 0};
  }  
  select = (index) => this.setState({selectedIndex: index});
  handleClose = () => this.setState({open: false})
  render() {
    return (
      <BrowserRouter>
      <MuiThemeProvider muiTheme={muiTheme}>
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
          <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>About</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>FAQ</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Blog</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Team</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>ICO</MenuItem>
        </Drawer>
         <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
      </div>
      </MuiThemeProvider>
       </BrowserRouter>
    );
  }
}

export default App;
