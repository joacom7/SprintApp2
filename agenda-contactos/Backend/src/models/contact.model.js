import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    id : {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

export const ContactModel = mongoose.model("contact", contactSchema);