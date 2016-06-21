import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Board from './Board.jsx';
import Slider from './Slider.jsx';
import PlayerTurn from './PlayerTurn.jsx';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {red500, blue500} from 'material-ui/styles/colors';
import isGameOver from './GameLogic.js';

class Game extends Component {
  constructor(props) {
    super(props);

    let emptyBoard = this.generateEmptyBoard(3);
    this.state = { size: 3, cells: emptyBoard, turn: 1, open: false };
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    let emptyBoard = this.generateEmptyBoard(3);
    this.setState({ size: 3, cells: emptyBoard, turn: 1, open: false });
  }

  generateEmptyBoard(size) {
    let template = [];
    let numCells = size * size;
    for (var i = 0; i < numCells; i++) {
      template.push(null);
    }
    return template;
  }

  handleSlider(event, value) {
    let emptyBoard = this.generateEmptyBoard(value);
    this.setState({ size: value, cells: emptyBoard, turn: 1 });
  }

  placePiece(cellIdx) {
    if (!this.state.cells[cellIdx]) {
      let newBoard = this.state.cells;
      newBoard[cellIdx] = (this.state.turn % 2) + 1;
      this.setState({ cells: newBoard, turn: this.state.turn + 1 });
      if (this.state.turn >= this.state.size * 2 - 1) {
        if (isGameOver(cellIdx, this.state.cells, this.state.size, this.state.turn)) {
          this.setState({ open: true });
        }
      }
    }
  }

  getWinner() {
    if (this.state.turn % 2) {
      return (
        <FontIcon className='material-icons'
                  color={red500}
                  style={{fontSize:'40px', transform: 'translate(0, 12px)'}}>
          clear
        </FontIcon>
      )
    } else {
      return (
        <FontIcon className='material-icons'
                  color={blue500}
                  style={{fontSize:'40px', transform: 'translate(0, 12px)'}}>
          radio_button_unchecked
        </FontIcon>
      )
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
    ];

    return (
      <div>
        <Navbar />
        <Slider size={this.state.size} handler={this.handleSlider.bind(this)}/>
        <Dialog
          title="Game Over"
          modal={false}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={{width:"250px"}}
          bodyStyle={{fontSize:"20px"}}
        >
          Player { this.getWinner() } Wins!
        </Dialog>
        <Board size={this.state.size}
               cells={this.state.cells}
               clickHandler={this.placePiece.bind(this)}/>
        <PlayerTurn turn={this.state.turn} />
      </div>
    );
  }
}

export default Game;
