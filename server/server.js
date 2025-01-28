const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample route for fetching user data
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to my backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
