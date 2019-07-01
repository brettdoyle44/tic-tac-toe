'use strict'

const board = require('./board')

const winCondition = function () {
  if (board.game.cells[0] === 'X' && board.game.cells[1] === 'X' && board.game.cells[2] === 'X') {
    $('#message').text('You win!')
    $('#message').addClass('alert-success')
    $('')
    return true
  } else if (board.game.cells[0] === 'X' && board.game.cells[3] === 'X' && board.game.cells[6] === 'X') {
    $('#message').text('You win!')
    $('#message').addClass('alert-success')
    return true
  } else if (board.game.cells[0] === 'X' && board.game.cells[4] === 'X' && board.game.cells[8] === 'X') {
    $('#message').text('You win!')
    $('#message').addClass('alert-success')
    return true
  } else if (board.game.cells[2] === 'X' && board.game.cells[4] === 'X' && board.game.cells[6] === 'X') {
    $('#message').text('You win!')
    $('#message').addClass('alert-success')
    return true
  } else if (board.game.cells[2] === 'X' && board.game.cells[5] === 'X' && board.game.cells[8] === 'X') {
    $('#message').text('You win!')
    $('#message').addClass('alert-success')
    return true
  } else if (board.game.cells[6] === 'X' && board.game.cells[7] === 'X' && board.game.cells[8] === 'X') {
    $('#message').text('You win!')
    $('#message').addClass('alert-success')
    return true
    // check O's
  } else if (board.game.cells[0] === 'O' && board.game.cells[1] === 'O' && board.game.cells[2] === 'O') {
    $('#message').text('You win!')
    $('#message').addClass('alert-success')
    return true
  } else if (board.game.cells[0] === 'O' && board.game.cells[3] === 'O' && board.game.cells[6] === 'O') {
    $('#message').text('You win!')
    $('#message').addClass('alert-success')
    return true
  } else if (board.game.cells[0] === 'O' && board.game.cells[4] === 'O' && board.game.cells[8] === 'O') {
    $('#message').text('You win!')
    $('#message').addClass('alert-success')
    return true
  } else if (board.game.cells[2] === 'O' && board.game.cells[4] === 'O' && board.game.cells[6] === 'O') {
    $('#message').text('You win!')
    $('#message').addClass('alert-success')
    return true
  } else if (board.game.cells[2] === 'O' && board.game.cells[5] === 'O' && board.game.cells[8] === 'O') {
    $('#message').text('You win!')
    $('#message').addClass('alert-success')
    return true
  } else if (board.game.cells[6] === 'O' && board.game.cells[7] === 'O' && board.game.cells[8] === 'O') {
    $('#message').text('You win!')
    $('#message').addClass('alert-success')
    return true
  } else if ((board.game.cells[0] !== '') && (board.game.cells[1] !== '') && (board.game.cells[2] !== '') && (board.game.cells[3] !== '') && (board.game.cells[4] !== '') && (board.game.cells[5] !== '') && (board.game.cells[6] !== '') && (board.game.cells[7] !== '') && (board.game.cells[8] !== '')) {
    $('#message').text('It\'s a tie!')
    $('#message').addClass('alert-success')
    return true
  }
  return false
}

let currentPlayer = ''

const switchUsers = () => {
  if (currentPlayer === '') {
    currentPlayer = 'O'
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X'
  } else {
    currentPlayer = 'O'
  }
  return currentPlayer
}

const resetBoard = () => {
  $('.square').data('cell-value', '')
  $('.square').text('')
}

module.exports = {
  winCondition,
  switchUsers,
  currentPlayer,
  resetBoard
}
