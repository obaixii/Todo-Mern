import mongoose from 'mongoose';

var validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}; 
const {Schema} = mongoose;

const userSchema = new Schema({
    fullname:{
        type:String,
        required:[true, "Please Provide the full name"],
        minLength:[3, "{VALUE} is not a valid full name"],
        maxLength:[11, "{VALUE} is not a valid full name"],
    },
    username:{
        type:String,
        required: [true, "Please provide the username"],
        unique:[true, '{VALUE} is already saved, Please try different username']
    },
    email:{
        type:String,
        required:[true, 'Please provide the email'],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:[true, 'Please provide the status'],
        minLength:[8, "{VALUE} is not a valid password"],
    },
    avatar:{
        type:String
    }
})

export const Users = mongoose.model('user', userSchema)