import React from 'react';
import AppBar from 'material-ui/AppBar';

const Navbar = () => (
  <AppBar
    style={{height: '80px'}}
    title='Tic Tac Toe'
    titleStyle={{textAlign: 'center', fontSize: '30px', height: '80px', marginTop: '10px'}}
    showMenuIconButton={false}
  />
);

export default Navbar;
