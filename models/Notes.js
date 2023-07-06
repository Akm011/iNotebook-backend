const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    emdescriptionail:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        required: Date.now
    },
});

module.exports = mongoose.model('notes', NotesSchema);//create schema and use it.