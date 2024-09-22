# Example Mini Project 2 App
This repo contains both a front end (in `/public`), and a backend API (`index.js`, with MVC folder structure)

## How to run
1. Install the packages with the command `npm i`
2. Start the server `npm run dev`
3. Navigate to `http://localhost:3000`

### Notes
This is a barebones demo that utilizes a userData array (`/controllers/authController.js`) with basic JS logic to check if a user email exists, and then checks if the password matches

The response from the API has multiple status codes, which the front end (`/public/login.html`) will use to either navigate the user to the dashboard upon successful login, or display an error message