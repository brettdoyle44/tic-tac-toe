'use strict'

const boardData = require('./board')

const winCondition = function (data) {
  if (boardData.game.cells[0] === boardData.game.cells[1] && boardData.game.cells[1] === boardData.game.cells[2] || boardData.game.cells[0] === boardData.game.cells[3] && boardData.game.cells[3] === boardData.game.cells[6] || boardData.game.cells[0] === boardData.game.cells[4] && boardData.game.cells[4] === boardData.game.cells[8] || boardData.game.cells[2] === boardData.game.cells[4] && boardData.game.cells[4] === boardData.game.cells[6] || boardData.game.cells[2] === boardData.game.cells[5] && boardData.game.cells[5] === boardData.game.cells[8] || boardData.game.cells[6] === boardData.game.cells[7] && boardData.game.cells[7] === boardData.game.cells[8]) {
    console.log('You win bro!')
  }
}

module.exports = {
  winCondition
}
