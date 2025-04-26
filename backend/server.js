require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/proposalGenerator')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Proposal Schema
const proposalSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyIndustry: String,
  companyWebsite: String,
  clientName: { type: String, required: true },
  clientIndustry: String,
  clientWebsite: String,
  proposalType: { type: String, required: true },
  proposalPrompt: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Proposal = mongoose.model('Proposal', proposalSchema);

// Routes
app.post('/api/proposals', async (req, res) => {
  try {
    const proposal = new Proposal(req.body);
    await proposal.save();
    res.status(201).json(proposal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/proposals', async (req, res) => {
  try {
    const proposals = await Proposal.find().sort({ createdAt: -1 });
    res.json(proposals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});