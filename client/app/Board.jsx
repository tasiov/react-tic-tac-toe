import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {red500, blue500} from 'material-ui/styles/colors';

const Board = (props) => {
  const cellSize = 450 / props.size;

  return (
    <div className='board'>
      { props.cells.map((cell, idx) => {
          if (cell === 2) {
            return (
              <div className='cell'
                   key={idx}
                   onClick={ props.clickHandler.bind(this, idx) }
                   style={{ display: 'inline-block',
                            height: cellSize + 'px',
                            width: cellSize + 'px' }} >
                   <FontIcon className='material-icons'
                             color={blue500}
                             style={{fontSize:cellSize + 'px'}}>
                     radio_button_unchecked
                   </FontIcon>
              </div>
            )
          } else if (cell === 1) {
            return (
              <div className='cell'
                   key={idx}
                   onClick={ props.clickHandler.bind(null, idx) }
                   style={{ display: 'inline-block',
                            height: cellSize + 'px',
                            width: cellSize + 'px' }} >
                   <FontIcon className='material-icons'
                             color={red500}
                             style={{fontSize:cellSize + 'px'}}>
                     clear
                   </FontIcon>
              </div>
            )
          } else {
            return (
              <div className='cell'
                   key={idx}
                   onClick={ props.clickHandler.bind(null, idx) }
                   style={{ display: 'inline-block',
                            height: cellSize + 'px',
                            width: cellSize + 'px' }} >
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default Board;
