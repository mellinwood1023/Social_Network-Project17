import { Schema, model, Types } from 'mongoose';

const userSchema = new Schema( 
    {
        username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        },
        email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
        },
        thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
        ],
        friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        ],
    },
    {
        toJSON: {
        virtuals: true,
        },
    }
    );

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
    });

    const User = model('User', userSchema);
    
    export default User;