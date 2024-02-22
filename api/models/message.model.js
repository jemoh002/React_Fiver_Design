import mongoose, { mongo } from "mongoose";

const messageSchema = new Schema({
    ConversationId: {
        type: String,
        required: true
    },
    UserId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model("Message", messageSchema)