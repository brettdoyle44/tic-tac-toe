'use strict'

const config = require('../config')

const board = require('../board')

const store = require('../store')

const newGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games/' + board.game.id,
    method: 'PATCH',
    data: ,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  updateGame
}
