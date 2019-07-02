'use strict'

const store = require('./store')

const winCondition = function () {
  if (store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    return true
    // check O's
  } else if (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    return true
  } else if (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    return true
  } else if ((store.game.cells[0] !== '') && (store.game.cells[1] !== '') && (store.game.cells[2] !== '') && (store.game.cells[3] !== '') && (store.game.cells[4] !== '') && (store.game.cells[5] !== '') && (store.game.cells[6] !== '') && (store.game.cells[7] !== '') && (store.game.cells[8] !== '')) {
    $('#message').text('It\'s a tie!')
    $('#message').removeClass('alert-success')
    $('#message').addClass('alert-warning')
    return true
  }
  return false
}

const noMove = (current) => {
  const game = store.game
  if (game.cells[current] === '') {
    return true
  } return false
}

const switchUsers = () => {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else {
    store.currentPlayer = 'X'
  }
}

const resetBoard = () => {
  $('.square').data('cell-value', '')
  $('.square').text('')
}

module.exports = {
  winCondition,
  switchUsers,
  resetBoard,
  noMove
}
