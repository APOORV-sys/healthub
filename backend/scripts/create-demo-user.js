const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../src/models/User');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/healthmonitoring', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

const createDemoUser = async () => {
  try {
    const demoUserData = {
      email: 'admin@healthhub.com',
      password: 'password123',
      profile: {
        firstName: 'Admin',
        lastName: 'User',
        age: 30,
        gender: 'prefer-not-to-say'
      }
    };

    // Check if user already exists
    const existingUser = await User.findOne({ email: demoUserData.email });
    if (existingUser) {
      console.log('Demo user already exists!');
      process.exit(0);
    }

    // Create new user
    const user = new User(demoUserData);
    await user.save();

    console.log('Demo user created successfully!');
    console.log('Email:', demoUserData.email);
    console.log('Password:', demoUserData.password);
    process.exit(0);
  } catch (error) {
    console.error('Error creating demo user:', error);
    process.exit(1);
  }
};

createDemoUser();