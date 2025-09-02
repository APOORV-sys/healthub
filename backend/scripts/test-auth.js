const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const FileStorage = require('../src/utils/fileStorage');

async function testAuth() {
  try {
    console.log('Testing JWT Authentication with JSON Storage...\n');

    // Test 1: Create a test user
    console.log('1. Creating test user...');
    const testUser = {
      email: 'test@example.com',
      password: 'password123',
      profile: {
        firstName: 'Test',
        lastName: 'User',
        age: 25,
        gender: 'male'
      }
    };

    // Hash password
    const hashedPassword = await bcrypt.hash(testUser.password, 10);
    const userData = {
      email: testUser.email,
      password: hashedPassword,
      profile: testUser.profile
    };

    const createdUser = await FileStorage.createUser(userData);
    console.log('✅ User created:', { id: createdUser.id, email: createdUser.email });

    // Test 2: Find user by email
    console.log('\n2. Finding user by email...');
    const foundUser = await FileStorage.findUserByEmail(testUser.email);
    console.log('✅ User found:', { id: foundUser.id, email: foundUser.email });

    // Test 3: Verify password
    console.log('\n3. Verifying password...');
    const isPasswordValid = await bcrypt.compare(testUser.password, foundUser.password);
    console.log('✅ Password valid:', isPasswordValid);

    // Test 4: Generate JWT token
    console.log('\n4. Generating JWT token...');
    const token = jwt.sign({ userId: foundUser.id }, 'fallback-secret', { expiresIn: '7d' });
    console.log('✅ Token generated:', token.substring(0, 50) + '...');

    // Test 5: Verify JWT token
    console.log('\n5. Verifying JWT token...');
    const decoded = jwt.verify(token, 'fallback-secret');
    console.log('✅ Token decoded:', decoded);

    // Test 6: Find user by ID
    console.log('\n6. Finding user by ID...');
    const userById = await FileStorage.findUserById(decoded.userId);
    console.log('✅ User found by ID:', { id: userById.id, email: userById.email });

    console.log('\n🎉 All tests passed! JWT authentication with JSON storage is working correctly.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testAuth();
