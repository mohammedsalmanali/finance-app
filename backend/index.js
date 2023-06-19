// Import required modules
import express, { json, urlencoded } from 'express';
const app = express();
const port = 3000; // Set the port number as per your preference

// Middleware
app.use(json()); // Parse JSON requests
app.use(urlencoded({ extended: true })); // Parse URL-encoded requests

// Define API endpoints and corresponding route handlers

// Example endpoint
app.get('/api/users', (req, res) => {
  // Handle the GET request for /api/users
  // Implement the logic to fetch users from the database or any other data source
  // Return the users as a response
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ];
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
