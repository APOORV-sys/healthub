const fs = require('fs').promises;
const path = require('path');

const USERS_FILE = path.join(__dirname, '../storage/users.json');

class FileStorage {
  static async readUsers() {
    try {
      const data = await fs.readFile(USERS_FILE, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      // If file doesn't exist or is empty, return empty array
      return [];
    }
  }

  static async writeUsers(users) {
    try {
      await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
      return true;
    } catch (error) {
      console.error('Error writing users file:', error);
      return false;
    }
  }

  static async findUserByEmail(email) {
    const users = await this.readUsers();
    return users.find(user => user.email === email);
  }

  static async findUserById(id) {
    const users = await this.readUsers();
    return users.find(user => user.id === id);
  }

  static async createUser(userData) {
    const users = await this.readUsers();
    const newUser = {
      id: Date.now().toString(), // Simple ID generation
      ...userData,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    const success = await this.writeUsers(users);
    
    if (success) {
      return newUser;
    }
    throw new Error('Failed to save user');
  }

  static async updateUser(id, updateData) {
    const users = await this.readUsers();
    const userIndex = users.findIndex(user => user.id === id);
    
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    
    users[userIndex] = { ...users[userIndex], ...updateData };
    const success = await this.writeUsers(users);
    
    if (success) {
      return users[userIndex];
    }
    throw new Error('Failed to update user');
  }

  static async deleteUser(id) {
    const users = await this.readUsers();
    const userIndex = users.findIndex(user => user.id === id);
    
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    
    users.splice(userIndex, 1);
    const success = await this.writeUsers(users);
    
    if (success) {
      return true;
    }
    throw new Error('Failed to delete user');
  }
}

module.exports = FileStorage;
