import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({ 
    message: String,
    time:String,
    roomId:Number,
    nick:String
});

const message = mongoose.model('Message', messageSchema);
export default message