import { User, Thought } from '../models/index.js';

const cleanDB = async () => {
  try {
    await Thought.deleteMany({});
    console.log('Thoughts collection cleaned');
  } catch (error) {
    console.error('Error cleaning Thoughts collection:', error);
  }

  try {
    await User.deleteMany({});
    console.log('Users collection cleaned');
  } catch (error) {
    console.error('Error cleaning Users collection:', error);
  }
  try {
        await Thought.collection.drop();
        console.log('Thoughts collection dropped');
    } catch (error) {
        console.error('Error dropping Thoughts collection:', error);
    }
    try {
        await User.collection.drop();
        console.log('Users collection dropped');
    } catch (error) {
        console.error('Error dropping Users collection:', error);
    }
    };

    export default cleanDB;
    // This function is used to clean the database by deleting all documents in the User and Thought collections.