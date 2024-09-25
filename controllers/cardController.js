const data = [
  {
    id: 1,
    title: 'First title',
    text: "First text",
    price: 0,
    image: "https://image.jpg"
  },
  {
    id: 2,
    title: 'Second title',
    text: "Second text",
    price: 0,
    image: "https://image.jpg"
  },
  {
    id: 3,
    title: 'Third title',
    text: "Third text",
    price: 0,
    image: "https://image.jpg"
  }
]

const getCards = (req, res) => {
  res.status(200).json({ result: data})
}

const postCard = (req, res) => {
  let title = req.body.title
  let text = req.body.text
  console.log('cardController - postCard', title, text)
  

  let newData = data
  let newId = newData.length + 1

  newData.push({
    id: newId,
    title: title,
    text: text,
    price: 0,
    image: "https://image.jpg"
  })

  res.status(200).json({ result: newData})
}

const updateCard = (req, res) => {
  let cardId = Number(req.params.id)
  let title = req.body.title
  let text = req.body.text

  console.log(cardId, title, text)

  // find the correct id to update, and then edit the array with new data

  let newData = data

  const cardIndex = newData.findIndex((element) => element.id === cardId)
  console.log('cardIndex', cardIndex)

  newData[cardIndex] = {
    ...newData[cardIndex],
    title: title,
    text: text
  }

  console.log('new card data', newData)

  res.status(200).json({ result: newData})
}

module.exports = {
  getCards,
  postCard,
  updateCard
}