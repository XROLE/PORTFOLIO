import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

mongoose.connect('mongodb://localhose/hireme');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    email: {
        type: sring,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    }, 
    name:{
        type: string,
        required: true
    },
    message:{
        required: true
    },
    create_at:{
        type: Date,
        default: Date.now 
    }
});

export default Message = mongoose.model('Message', messageSchema);

// get all messages

export const getMessages = (cb, limit) => {
    message.find(cb).limit(limit);
}