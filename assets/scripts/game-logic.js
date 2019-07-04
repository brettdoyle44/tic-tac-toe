'use strict'

const store = require('./store')

const winCondition = function () {
  if (store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    $('#sqr-zero').css('color', '#00FF00')
    $('#sqr-one').css('color', '#00FF00')
    $('#sqr-two').css('color', '#00FF00')
    return true
  } else if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    $('#sqr-zero').css('color', '#00FF00')
    $('#sqr-three').css('color', '#00FF00')
    $('#sqr-six').css('color', '#00FF00')
    return true
  } else if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    $('#sqr-zero').css('color', '#00FF00')
    $('#sqr-four').css('color', '#00FF00')
    $('#sqr-eight').css('color', '#00FF00')
    return true
  } else if (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    $('#sqr-one').css('color', '#00FF00')
    $('#sqr-four').css('color', '#00FF00')
    $('#sqr-seven').css('color', '#00FF00')
    return true
  } else if (store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    $('#sqr-two').css('color', '#00FF00')
    $('#sqr-four').css('color', '#00FF00')
    $('#sqr-six').css('color', '#00FF00')
    return true
  } else if (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    $('#sqr-two').css('color', '#00FF00')
    $('#sqr-five').css('color', '#00FF00')
    $('#sqr-eight').css('color', '#00FF00')
    return true
  } else if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    $('#sqr-three').css('color', '#00FF00')
    $('#sqr-four').css('color', '#00FF00')
    $('#sqr-five').css('color', '#00FF00')
    return true
  } else if (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') {
    $('#message').text('Player X wins!')
    $('#message').addClass('alert-success')
    $('#sqr-six').css('color', '#00FF00')
    $('#sqr-seven').css('color', '#00FF00')
    $('#sqr-eight').css('color', '#00FF00')
    return true
    // check O's
  } else if (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    $('#sqr-zero').css('color', '#00FF00')
    $('#sqr-one').css('color', '#00FF00')
    $('#sqr-two').css('color', '#00FF00')
    return true
  } else if (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    $('#sqr-zero').css('color', '#00FF00')
    $('#sqr-three').css('color', '#00FF00')
    $('#sqr-six').css('color', '#00FF00')
    return true
  } else if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    $('#sqr-zero').css('color', '#00FF00')
    $('#sqr-four').css('color', '#00FF00')
    $('#sqr-eight').css('color', '#00FF00')
    return true
  } else if (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    $('#sqr-one').css('color', '#00FF00')
    $('#sqr-four').css('color', '#00FF00')
    $('#sqr-seven').css('color', '#00FF00')
    return true
  } else if (store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    $('#sqr-two').css('color', '#00FF00')
    $('#sqr-four').css('color', '#00FF00')
    $('#sqr-six').css('color', '#00FF00')
    return true
  } else if (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    $('#sqr-two').css('color', '#00FF00')
    $('#sqr-five').css('color', '#00FF00')
    $('#sqr-eight').css('color', '#00FF00')
    return true
  } else if (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    $('#sqr-three').css('color', '#00FF00')
    $('#sqr-four').css('color', '#00FF00')
    $('#sqr-five').css('color', '#00FF00')
    return true
  } else if (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') {
    $('#message').text('Player O wins!')
    $('#message').addClass('alert-success')
    $('#sqr-six').css('color', '#00FF00')
    $('#sqr-seven').css('color', '#00FF00')
    $('#sqr-eight').css('color', '#00FF00')
    return true
  } else if ((store.game.cells[0] !== '') && (store.game.cells[1] !== '') && (store.game.cells[2] !== '') && (store.game.cells[3] !== '') && (store.game.cells[4] !== '') && (store.game.cells[5] !== '') && (store.game.cells[6] !== '') && (store.game.cells[7] !== '') && (store.game.cells[8] !== '')) {
    $('#message').text('It\'s a tie!')
    $('#message').removeClass('alert-success')
    $('#message').addClass('alert-warning')
    $('#sqr-zero').css('color', '#ffc107')
    $('#sqr-one').css('color', '#ffc107')
    $('#sqr-two').css('color', '#ffc107')
    $('#sqr-three').css('color', '#ffc107')
    $('#sqr-four').css('color', '#ffc107')
    $('#sqr-five').css('color', '#ffc107')
    $('#sqr-six').css('color', '#ffc107')
    $('#sqr-seven').css('color', '#ffc107')
    $('#sqr-eight').css('color', '#ffc107')
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
  $('#sqr-zero').css('color', '#ffffff')
  $('#sqr-one').css('color', '#ffffff')
  $('#sqr-two').css('color', '#ffffff')
  $('#sqr-three').css('color', '#ffffff')
  $('#sqr-four').css('color', '#ffffff')
  $('#sqr-five').css('color', '#ffffff')
  $('#sqr-six').css('color', '#ffffff')
  $('#sqr-seven').css('color', '#ffffff')
  $('#sqr-eight').css('color', '#ffffff')
}

module.exports = {
  winCondition,
  switchUsers,
  resetBoard,
  noMove
}
