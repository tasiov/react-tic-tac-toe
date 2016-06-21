import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar.jsx';
import Game from './Game.jsx';

injectTapEventPlugin();

const App = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Game />
    </MuiThemeProvider>
  );
}

render(<App/>, document.getElementById('app'));
