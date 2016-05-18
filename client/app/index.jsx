import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

const App = () => {
  return (
    <div>
      <p> Hello React!</p>
      <AwesomeComponent />
    </div>
  );
}

render(<App/>, document.getElementById('app'));
