const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send('User registered successfully');
  } catch (err) {
    res.status(400).send('Error registering user');
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (!user) {
      return res.status(401).send('Invalid credentials');
    }
    res.send('User logged in successfully');
  } catch (err) {
    res.status(400).send('Error logging in user');
  }
};