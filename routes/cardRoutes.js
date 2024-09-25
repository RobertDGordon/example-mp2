const express = require('express')
const cardRouter = express.Router()
const cardController = require('../controllers/cardController')



// http://localhost:3000/api/cards
cardRouter.get('/cards', (req, res)=>{
  cardController.getCards(req, res)
})

// http://localhost:3000/api/cards/post
cardRouter.post('/cards/post', (req, res)=>{
  cardController.postCard(req, res)
})

// http://localhost:3000/api/cards/:id

cardRouter.put('/cards/:id', (req, res)=>{
  cardController.updateCard(req, res)
})

module.exports = cardRouter;