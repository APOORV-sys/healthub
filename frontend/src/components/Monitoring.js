import React, { useState } from 'react';

const Monitoring = () => {
  const [healthData, setHealthData] = useState({
    systolic: '',
    diastolic: '',
    bloodSugar: '',
    weight: '',
    temperature: '',
    sleep: ''
  });

  const handleInputChange = (field, value) => {
    setHealthData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Saving health data:', healthData);
    // Here you would send data to your backend
    alert('Health data saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary-200 shadow-lg">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-primary-700 text-2xl">📈</span>
          <h3 className="text-xl font-bold text-primary-900">Health Metrics Tracking</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">Blood Pressure</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Systolic"
                  value={healthData.systolic}
                  onChange={(e) => handleInputChange('systolic', e.target.value)}
                  className="flex-1 px-3 py-2 bg-primary-50 backdrop-blur-sm border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <input
                  type="number"
                  placeholder="Diastolic"
                  value={healthData.diastolic}
                  onChange={(e) => handleInputChange('diastolic', e.target.value)}
                  className="flex-1 px-3 py-2 bg-primary-50 backdrop-blur-sm border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">Blood Sugar (mg/dL)</label>
              <input
                type="number"
                placeholder="Enter value"
                value={healthData.bloodSugar}
                onChange={(e) => handleInputChange('bloodSugar', e.target.value)}
                className="w-full px-3 py-2 bg-primary-50 backdrop-blur-sm border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">Weight (kg)</label>
              <input
                type="number"
                placeholder="Enter weight"
                value={healthData.weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
                className="w-full px-3 py-2 bg-primary-50 backdrop-blur-sm border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">Temperature (°F)</label>
              <input
                type="number"
                placeholder="Enter temperature"
                value={healthData.temperature}
                onChange={(e) => handleInputChange('temperature', e.target.value)}
                className="w-full px-3 py-2 bg-primary-50 backdrop-blur-sm border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">Sleep Duration (hours)</label>
              <input
                type="number"
                placeholder="Hours slept"
                value={healthData.sleep}
                onChange={(e) => handleInputChange('sleep', e.target.value)}
                className="w-full px-3 py-2 bg-primary-50 backdrop-blur-sm border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <button
              onClick={handleSave}
              className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>💾</span>
              <span>Log Health Data</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary-200 shadow-lg">
        <h3 className="text-xl font-bold text-primary-900 mb-4">Health Trends</h3>
        <div className="h-64 bg-primary-50 backdrop-blur-sm rounded-lg border border-primary-200 flex items-center justify-center">
          <p className="text-primary-500">Health trends chart would be displayed here using Chart.js or similar</p>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;


