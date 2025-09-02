
import React, { useState } from 'react';


const Diet = () => {
  const [selectedMeal, setSelectedMeal] = useState('breakfast');
  
  const dietPlan = {
    breakfast: {
      time: '7:00 AM',
      foods: [
        { item: '1 cup oatmeal with berries', calories: 150 },
        { item: '1 glass low-fat milk', calories: 100 },
        { item: '1 banana', calories: 90 },
        { item: 'Green tea', calories: 10 }
      ],
      totalCalories: 350
    },
    lunch: {
      time: '12:30 PM',
      foods: [
        { item: 'Grilled chicken salad', calories: 200 },
        { item: '1 cup brown rice', calories: 150 },
        { item: 'Mixed vegetables', calories: 80 },
        { item: '1 glass water', calories: 0 }
      ],
      totalCalories: 430
    },
    dinner: {
      time: '7:00 PM',
      foods: [
        { item: 'Baked salmon', calories: 180 },
        { item: 'Steamed broccoli', calories: 30 },
        { item: '1 small sweet potato', calories: 100 },
        { item: 'Herbal tea', calories: 5 }
      ],
      totalCalories: 315
    }
  };

  const dailyGoals = {
    calories: { current: 1095, target: 1400 },
    protein: { current: 65, target: 80 },
    carbs: { current: 150, target: 180 },
    fat: { current: 45, target: 60 }
  };

  return (
    <div className="space-y-6">
      <div className="bg-french-gray/80 backdrop-blur-lg rounded-xl p-6 border border-tiffany-blue/30 shadow-lg">
        <div className="flex items-center space-x-2 mb-4">
                     <span className="text-tiffany-blue text-2xl">🍽️</span>
          <h3 className="text-xl font-bold text-drab-dark-brown">Personalized Diet Chart</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex space-x-2 mb-4">
              {Object.keys(dietPlan).map(meal => (
                <button
                  key={meal}
                  onClick={() => setSelectedMeal(meal)}
                  className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                    selectedMeal === meal
                      ? 'bg-tiffany-blue text-drab-dark-brown'
                      : 'bg-french-gray/60 text-drab-dark-brown hover:bg-french-gray/80'
                  }`}
                >
                  {meal}
                </button>
              ))}
            </div>

            <div className="bg-french-gray/50 backdrop-blur-sm rounded-lg p-6 border border-tiffany-blue/20">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-drab-dark-brown capitalize">{selectedMeal} ({dietPlan[selectedMeal].time})</h4>
                <span className="text-sm text-tiffany-blue font-medium">
                  {dietPlan[selectedMeal].totalCalories} calories
                </span>
              </div>
              <div className="space-y-2">
                {dietPlan[selectedMeal].foods.map((food, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-primary-200 last:border-b-0">
                    <span className="text-drab-dark-brown">{food.item}</span>
                    <span className="text-sm text-tiffany-blue">{food.calories} cal</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-french-gray/50 backdrop-blur-sm rounded-lg p-4 border border-tiffany-blue/20">
              <div className="flex items-center space-x-2 mb-3">
                                 <span className="text-tiffany-blue">🎯</span>
              <h4 className="font-semibold text-drab-dark-brown">Daily Goals</h4>
              </div>
              <div className="space-y-3">
                {Object.entries(dailyGoals).map(([nutrient, data]) => (
                  <div key={nutrient}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="capitalize text-drab-dark-brown font-semibold">{nutrient}</span>
                      <span className="font-bold text-tiffany-blue">{data.current}/{data.target}</span>
                    </div>
                    <div className="w-full bg-french-gray/40 rounded-full h-2">
                      <div
                        className="bg-tiffany-blue h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((data.current / data.target) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-french-gray/50 backdrop-blur-sm rounded-lg p-4 border border-tiffany-blue/20">
              <h4 className="font-semibold text-drab-dark-brown mb-3">Quick Add</h4>
              <div className="space-y-2">
                                 <button className="w-full text-left p-3 bg-tiffany-blue text-drab-dark-brown rounded border border-tiffany-blue/60 hover:bg-tiffany-blue/80 transition-colors flex items-center space-x-2 font-semibold">
                    <span className="text-tiffany-blue">➕</span>
                    <span>Log meal</span>
                  </button>
                                 <button className="w-full text-left p-3 bg-french-gray/60 backdrop-blur-sm rounded border border-french-gray/40 hover:bg-french-gray/80 transition-colors flex items-center space-x-2">
                    <span className="text-tiffany-blue">➕</span>
                    <span>Add snack</span>
                  </button>
                                 <button className="w-full text-left p-3 bg-french-gray/60 backdrop-blur-sm rounded border border-french-gray/40 hover:bg-french-gray/80 transition-colors flex items-center space-x-2">
                    <span className="text-tiffany-blue">➕</span>
                    <span>Water intake</span>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diet;

