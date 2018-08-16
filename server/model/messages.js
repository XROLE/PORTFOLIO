import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    }, 
    name:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    create_at:{
        type: Date,
        default: Date.now 
    }
});
const Message = module.exports = mongoose.model('Message', messageSchema);

// get all messages
module.exports.getMessages = (cb, limit) => {
    Message.find(cb).limit(limit);
}