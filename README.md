# Social_Network-Project17

A simple backend API for managing users, thoughts, and reactions using JavaScript and tested via Insomnia. This API allows you to:

Create users with email and ID

Add thoughts to users

Add reactions to thoughts

Delete thoughts and reactions

## Features
Create and manage users with email and unique IDs

Add thoughts associated with users

Add and delete reactions on thoughts

Use Insomnia to test all API requests

Fully implemented with JavaScript

## Installation

Git Clone Repository
npm install 
npm start 
Open Insomnia 

## Usage
Use Insomnia (or any REST client) to interact with the API. Common use cases include:

1. Add a New User
POST /api/users

json
Copy
Edit
{
  "username": "johndoe",
  "email": "john@example.com"
}
2. Add a Thought
POST /api/thoughts

json
Copy
Edit
{
  "userId": "userIdHere",
  "thoughtText": "This is my first thought!"
}
3. Add a Reaction to a Thought
POST /api/thoughts/:thoughtId/reactions

json
Copy
Edit
{
  "reactionBody": "Great idea!",
  "username": "janedoe"
}
4. Delete a Thought
DELETE /api/thoughts/:thoughtId

5. Delete a Reaction
DELETE /api/thoughts/:thoughtId/reactions/:reactionId

## API Endpoints
Method	Endpoint	Description
POST	/api/users	Create a new user
POST	/api/thoughts	Add a new thought
POST	/api/thoughts/:thoughtId/reactions	Add a reaction to a thought
DELETE	/api/thoughts/:thoughtId	Delete a thought
DELETE	/api/thoughts/:thoughtId/reactions/:reactionId	Delete a specific reaction

## Demo



https://github.com/user-attachments/assets/08f8744e-31b7-49fa-9f3c-9d5d61fd2e45



## License
This project is licensed under the MIT License.
