const Users = require('../models/Users');
const Users = require('../models/Users');
const User = require('../models/Users'); 

exports.listUsers = async (req, res) => {
  try {
    const Users = await Users.find();
    res.json(Users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const Users = await User.findById(req.params.id);
    if (!Users) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(Users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUsers = async (req, res) => {
  try {
    const Users = new Users(req.body);
    const savedUsers = await Users.save();
    res.status(201).json(savedUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const Users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!Users) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(Users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUsers = async (req, res) => {
  try {
    const Users = await Users.findByIdAndRemove(req.params.id);
    if (!Users) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(Users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
