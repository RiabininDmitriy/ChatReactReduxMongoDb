import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import './db.connection'
import Message from './models/message'
import ChatRoom from './models/chatroom'

var app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/message/:id', async (req, res) => {

  const messageFind = await Message.find({ roomId: { $eq: req.params.id } })

  res.status(201).send(messageFind)
})

app.post('/message', async function (req, res) {
  try {
    let time = new Date().toLocaleTimeString()
    const body = req.body
    body.time = time
    const messageCreate = await Message.create(body)

    res.status(201).send(messageCreate)
  } catch (err) {
    console.log("what&.")
  }
})

app.get('/Chatrooms', async (req, res) => {
  try {
    const ChatroomDb = await ChatRoom.find()
    res.status(201).send(ChatroomDb)
  } catch (err) {
    console.log("Kakogo hrena?")
  }
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')

});
