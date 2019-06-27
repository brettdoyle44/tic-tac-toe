'use strict'

const board = require('./board')

const winCondition = function () {
  if ((board.game.cells[0] === board.game.cells[1]) && (board.game.cells[1] === board.game.cells[2])) {
    $('#message').text('You win!')
    $('#message').addClass('alert-success')
  }
  // } else if ((board.game.cells[0] === board.game.cells[3]) && (board.game.cells[3] === board.game.cells[6])) {
  //   $('#message').text('You win!')
  //   $('#message').addClass('alert-success')
  // } else if (board.game.cells[0] === board.game.cells[4] && board.game.cells[4] === board.game.cells[8]) {
  //   $('#message').text('You win!')
  //   $('#message').addClass('alert-success')
  // } else if (board.game.cells[2] === board.game.cells[4] && board.game.cells[4] === board.game.cells[6]) {
  //   $('#message').text('You win!')
  //   $('#message').addClass('alert-success')
  // } else if (board.game.cells[2] === board.game.cells[5] && board.game.cells[5] === board.game.cells[8]) {
  //   $('#message').text('You win!')
  //   $('#message').addClass('alert-success')
  // } else if (board.game.cells[6] === board.game.cells[7] && board.game.cells[7] === board.game.cells[8]) {
  //   $('#message').text('You win!')
  //   $('#message').addClass('alert-success')
  // }
}

module.exports = {
  winCondition
}
