import mongoose from 'mongoose';

const db = mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkAPI');

export default db.connection;
