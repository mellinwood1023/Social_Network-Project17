const users = [
  {
    username: 'johndoe',
    email: 'myemail@yahoo.com',
    password: 'password123',
    thoughts:
      {
        thoughtText: 'I love programming!',
        createdAt: new Date(),
  }
}
]

const thoughts = [
    {  
        thought: ' I love programming!',
        createdAt: new Date(),
    }
]

const reactions = [
    {
        reactionBody: 'I agree!',
        username: 'janedoe',
        createdAt: new Date(),
    },
]

export const getRandomUser = () => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    return {
        username: randomUser.username,
        email: randomUser.email,
        password: randomUser.password,
        thoughts: randomUser.thoughts,
    };
}

export const getRandomThought = () => {
    const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    return {
        thoughtText: randomThought.thoughtText,
        createdAt: randomThought.createdAt,
        username: randomThought.username,
    };
}
