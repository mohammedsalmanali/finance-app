// Import required modules
const express = require('express');
const app = express();
const port = 6000; // Set the port number as per your preference
const { json } = require('express');
const { urlencoded } = require('express');
// Middleware
//app.use(json()); // Parse JSON requests
//app.use(urlencoded({ extended: true })); // Parse URL-encoded requests

// Define API endpoints and corresponding route handlers

// Example endpoint
app.get('/', (req, res) => res.send('Hello World'))
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
