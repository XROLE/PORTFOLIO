import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: false,
        autoIndex: false,
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
},
{
    autoIndex: false
});
const Message = module.exports = mongoose.model('Message', messageSchema);
Message.ensureIndexes();

//  post message
module.exports.postMessage = (postedMessage, cb) => {
    Message.create(postedMessage, cb);
}

// get all messages
module.exports.getMessages = (cb, limit) => {
    Message.find(cb).limit(limit);
}

