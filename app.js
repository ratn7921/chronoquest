const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/empires', require('./routes/empireRoutes'));
app.use('/api/quests', require('./routes/questRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));

module.exports = app;
