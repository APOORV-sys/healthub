const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const FileStorage = require('../utils/fileStorage');

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET || 'fallback-secret', { expiresIn: '7d' });
};

exports.register = async (req, res) => {
  try {
    const { email, password, profile } = req.body;
    
    // Check if user already exists
    const existingUser = await FileStorage.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Create user data
    const userData = {
      email,
      password: hashedPassword,
      profile: profile || {}
    };
    
    // Save user to JSON file
    const user = await FileStorage.createUser(userData);
    
    // Generate JWT token
    const token = generateToken(user.id);
    
    // Return user data without password
    const { password: _, ...userWithoutPassword } = user;
    
    res.status(201).json({
      message: 'User created successfully',
      token,
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await FileStorage.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Generate JWT token
    const token = generateToken(user.id);
    
    // Return user data without password
    const { password: _, ...userWithoutPassword } = user;
    
    res.json({
      message: 'Login successful',
      token,
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await FileStorage.findUserById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Return user data without password
    const { password: _, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    console.log('Delete account request received');
    console.log('Request user:', req.user);
    const userId = req.user.id;
    console.log('User ID to delete:', userId);
    
    // Use the deleteUser method from FileStorage
    const result = await FileStorage.deleteUser(userId);
    console.log('Delete result:', result);
    
    res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    console.error('Delete account error:', error);
    if (error.message === 'User not found') {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(500).json({ message: 'Error deleting account', error: error.message });
  }
};


