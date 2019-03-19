import mongoose from 'mongoose'

const chatroomSchema = new mongoose.Schema({ id: Number, roomName: String });

const Chatroom = mongoose.model('ChatRoom', chatroomSchema);
Chatroom.find({ id: { $in: [1, 2, 3] } }, (err, res) => {console.log(res)
    if (!res.length) {
        Chatroom.create({ id: 1, roomName: "piton" })
        Chatroom.create({ id: 2, roomName: "Anakonda" })
        Chatroom.create({ id: 3, roomName: "Boa" })
    }
})


export default Chatroom