const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const Users = require('../models/Users');


router.get('/', async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const Users = await Users.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const Users = new Users(req.body);
    const savedUsers = await Users.save();
    res.status(201).json(savedUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!users) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const users = await Users.findByIdAndRemove(req.params.id);
    if (!users) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
