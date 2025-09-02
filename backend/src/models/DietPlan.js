const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: String,
  time: String,
  foods: [{
    item: String,
    quantity: String,
    calories: Number
  }],
  totalCalories: Number
});

const dietPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  meals: {
    breakfast: mealSchema,
    lunch: mealSchema,
    dinner: mealSchema,
    snacks: [mealSchema]
  },
  dailyGoals: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
    fiber: Number,
    water: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('DietPlan', dietPlanSchema);


