import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {red500, blue500} from 'material-ui/styles/colors';

const PlayerTurn = (props) => {
  const player = props.turn % 2;

  if (player) {
    return (
      <div className='player'>
        <span>Player  </span>
        <FontIcon className='material-icons'
                  color={blue500}
                  style={{fontSize:'40px', transform: 'translate(0, 8px)'}}>
          radio_button_unchecked
        </FontIcon>
        's Turn
      </div>
    )
  } else {
    return (
      <div className='player'>
        <span>Player  </span>
        <FontIcon className='material-icons'
                  color={red500}
                  style={{fontSize:'40px', transform: 'translate(0, 8px)'}}>
          clear
        </FontIcon>
        's Turn
      </div>
    )
  }
}

export default PlayerTurn;
