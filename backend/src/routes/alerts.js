const express = require('express');
const router = express.Router();
const Alert = require('../models/Alert');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  try {
    const alerts = await Alert.find({ userId: req.user.id, isActive: true })
                            .sort({ scheduledTime: 1 });
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching alerts', error: error.message });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const alert = new Alert({
      userId: req.user.id,
      ...req.body
    });
    
    await alert.save();
    res.status(201).json({ message: 'Alert created successfully', alert });
  } catch (error) {
    res.status(500).json({ message: 'Error creating alert', error: error.message });
  }
});

router.patch('/:id/read', auth, async (req, res) => {
  try {
    const alert = await Alert.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { isRead: true },
      { new: true }
    );
    
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found' });
    }
    
    res.json({ message: 'Alert marked as read', alert });
  } catch (error) {
    res.status(500).json({ message: 'Error updating alert', error: error.message });
  }
});

module.exports = router;


