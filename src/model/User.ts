import mongoose, { Schema, Document, Mongoose } from "mongoose";


/**
 * The 'Document' interface provides built-in properties of mongoose and methods for working
 * with MongoDB documents (like '_id', 'save()', 'remove()', etc.).
 */
// Define an interface Message that extends the Document interface from Mongoose
export interface Message extends Document {
    content: string;
    createdAt: Date;
}

// Define a schema for the Message model using Mongoose Schema
const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
})



//creating a user interface
export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date,
    isVerified: boolean;
    isAcceptingMessage: boolean,
    messages: Message[]

}


//user schema 
const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Regex pattern to validate email format
            "Please use a valid email" // Custom error message if the pattern doesn't match
        ]
    },
    password: {
        type: String,
        required: [true, "Password is Requried"]
    },
    verifyCode: {
        type: String,
        required: [true, "verififyCode is Requried"]
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "verififyCodeExpiry is Requried"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]
})


const UserModel = (mongoose.models.User as mongoose.Model<User>) ||   mongoose.model<User>("User", UserSchema);

export default UserModel;