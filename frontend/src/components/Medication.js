import React, { useState } from 'react';

const Medication = () => {
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      times: ['09:00', '21:00'],
      lastTaken: '09:00 AM today',
      status: 'missed'
    }
  ]);

  const [newMed, setNewMed] = useState({
    name: '',
    dosage: '',
    frequency: 'once_daily'
  });

  const addMedication = () => {
    if (newMed.name && newMed.dosage) {
      const medication = {
        id: Date.now(),
        ...newMed,
        times: ['09:00'],
        lastTaken: 'Not taken',
        status: 'pending'
      };
      setMedications(prev => [...prev, medication]);
      setNewMed({ name: '', dosage: '', frequency: 'once_daily' });
    }
  };

  const markAsTaken = (id) => {
    setMedications(prev => prev.map(med => 
      med.id === id ? { ...med, status: 'taken', lastTaken: 'Just now' } : med
    ));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary-200 shadow-lg">
        <div className="flex items-center space-x-2 mb-4">
                     <span className="text-primary-700 text-2xl">💊</span>
          <h3 className="text-xl font-bold text-primary-900">Medication Management</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-primary-800 mb-3">Current Medications</h4>
            <div className="space-y-3">
              {medications.map(med => (
                <div key={med.id} className="flex items-center justify-between p-3 bg-primary-50 backdrop-blur-sm rounded-lg border border-primary-200">
                  <div className="flex items-center space-x-3">
                                         <span className={`${
                       med.status === 'taken' ? 'text-secondary-500' :
                       med.status === 'missed' ? 'text-red-500' : 'text-primary-700'
                     }`}>💊</span>
                    <div>
                      <p className="font-medium text-primary-900">{med.name}</p>
                      <p className="text-sm text-primary-600">{med.dosage} - {med.frequency}</p>
                      <p className="text-xs text-primary-500">Last taken: {med.lastTaken}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => markAsTaken(med.id)}
                    className={`${
                      med.status === 'taken' ? 'text-secondary-500' : 'text-yellow-500 hover:text-secondary-500'
                    } transition-colors`}
                  >
                                         {med.status === 'taken' ? <span>✅</span> : <span>⏰</span>}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary-800 mb-3">Add New Medication</h4>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Medication name"
                value={newMed.name}
                onChange={(e) => setNewMed(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 bg-primary-50 backdrop-blur-sm border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="text"
                placeholder="Dosage (e.g., 500mg)"
                value={newMed.dosage}
                onChange={(e) => setNewMed(prev => ({ ...prev, dosage: e.target.value }))}
                className="w-full px-3 py-2 bg-primary-50 backdrop-blur-sm border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <select
                value={newMed.frequency}
                onChange={(e) => setNewMed(prev => ({ ...prev, frequency: e.target.value }))}
                className="w-full px-3 py-2 bg-primary-50 backdrop-blur-sm border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="once_daily">Once daily</option>
                <option value="twice_daily">Twice daily</option>
                <option value="three_times_daily">Three times daily</option>
                <option value="as_needed">As needed</option>
              </select>
              <button
                onClick={addMedication}
                className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>➕</span>
                <span>Add Medication</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary-200 shadow-lg">
        <h3 className="text-xl font-bold text-primary-900 mb-4">Treatment Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-primary-50 backdrop-blur-sm rounded-lg border border-primary-200">
            <h4 className="font-medium text-primary-900 mb-2">Medication Reminders</h4>
            <p className="text-sm text-primary-600">Set up personalized reminders for all your medications</p>
          </div>
          <div className="p-4 bg-primary-50 backdrop-blur-sm rounded-lg border border-primary-200">
            <h4 className="font-medium text-primary-900 mb-2">Side Effect Tracking</h4>
            <p className="text-sm text-primary-600">Monitor and report any side effects to your healthcare provider</p>
          </div>
          <div className="p-4 bg-primary-50 backdrop-blur-sm rounded-lg border border-primary-200">
            <h4 className="font-medium text-primary-900 mb-2">Drug Interactions</h4>
            <p className="text-sm text-primary-600">Check for potential interactions between medications</p>
          </div>
          <div className="p-4 bg-primary-50 backdrop-blur-sm rounded-lg border border-primary-200">
            <h4 className="font-medium text-primary-900 mb-2">Refill Reminders</h4>
            <p className="text-sm text-primary-600">Never run out of important medications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medication;


