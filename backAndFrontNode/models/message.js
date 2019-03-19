import mongoose from 'mongoose'

var messageSchema = new mongoose.Schema({ 
    message: String,
    time:String,
    roomId:Number,
    nick:String
});

var message = mongoose.model('Message', messageSchema);
export default message