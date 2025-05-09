import db from '../config/connections.js';
import { User, Thought } from '../models/index.js';
import { getRandomUser, getRandomThought } from './data.js';
import cleanDB from './cleanDB.js';

try {
    await db();
    console.log('Database connected successfully');
    await cleanDB();
    console.log('Database cleaned successfully');

    const users = await User.find();
    if (users.length === 0) {
        const userCount = 10; // Number of users to create
        const userPromises = Array.from({ length: userCount }, getRandomUser);
        await User.insertMany(userPromises);
        console.log('Users created successfully');
    } else {
        console.log('Users already exist, skipping creation');
    }

    const thoughts = await Thought.find();
    if (thoughts.length === 0) {
        const thoughtCount = 10; // Number of thoughts to create
        const thoughtPromises = Array.from({ length: thoughtCount }, getRandomThought);
        await Thought.insertMany(thoughtPromises);
        console.log('Thoughts created successfully');
    } else {
        console.log('Thoughts already exist, skipping creation');
    }

    console.table(users, ['_id', 'username', 'email']);
    console.table(thoughts, ['_id', 'thoughtText', 'username', 'createdAt']);
}
catch (error) {
    console.error('Error seeding database:', error);
}
finally {
    db.close();
    console.log('Database connection closed');
}
