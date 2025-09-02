const mongoose = require('mongoose');

const healthDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  vitals: {
    bloodPressure: {
      systolic: Number,
      diastolic: Number
    },
    heartRate: Number,
    temperature: Number,
    weight: Number,
    bloodSugar: Number,
    oxygenSaturation: Number
  },
  lifestyle: {
    sleepHours: Number,
    waterIntake: Number,
    steps: Number,
    exerciseMinutes: Number
  },
  symptoms: [String],
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('HealthData', healthDataSchema);


