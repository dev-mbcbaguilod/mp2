// Import necessary modules
require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import cors middleware
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

// Connect to MongoDB
connectDB();

// Create an Express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/products', productRoutes);

// Define the port (use the environment variable if available, otherwise use 5000)
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});