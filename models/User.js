const mongoose = required('mongoose');

const UserSchema = new schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: Date.now
    },
});

module.exports = mongoose.model('user', UserSchema);