import React, { useState } from 'react';

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'warning', message: 'Medication reminder: Take your morning pills', time: '9:00 AM', isRead: false },
    { id: 2, type: 'info', message: 'Weekly health checkup scheduled for tomorrow', time: '2 hours ago', isRead: false },
    { id: 3, type: 'success', message: 'Blood pressure reading recorded successfully', time: '1 day ago', isRead: true }
  ]);

  const markAsRead = (alertId) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, isRead: true } : alert
    ));
  };

  const markAllAsRead = () => {
    setAlerts(prev => prev.map(alert => ({ ...alert, isRead: true })));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary-200 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-primary-900">Alerts & Notifications</h3>
          <button
            onClick={markAllAsRead}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Mark All Read
          </button>
        </div>
        
        <div className="space-y-3">
          {alerts.map(alert => (
            <div key={alert.id} className={`flex items-start space-x-3 p-4 backdrop-blur-sm rounded-lg transition-colors ${
              alert.isRead ? 'bg-primary-50 border border-primary-200' : 'bg-primary-100 border border-primary-300'
            }`}>
                              <span className={`mt-0.5 ${alert.isRead ? 'text-primary-400' : 'text-primary-700'}`}>🔔</span>
              <div className="flex-1">
                <p className={`${alert.isRead ? 'text-primary-500' : 'text-primary-900'}`}>{alert.message}</p>
                <p className="text-sm text-primary-500">{alert.time}</p>
              </div>
              {!alert.isRead && (
                <button
                  onClick={() => markAsRead(alert.id)}
                  className="text-primary-600 hover:text-primary-800"
                >
                                     <span>✅</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary-200 shadow-lg">
        <h3 className="text-xl font-bold text-primary-900 mb-4">Notification Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-primary-50 backdrop-blur-sm rounded-lg border border-primary-200">
            <span className="text-primary-900">Medication Reminders</span>
            <input type="checkbox" defaultChecked className="toggle" />
          </div>
          <div className="flex items-center justify-between p-3 bg-primary-50 backdrop-blur-sm rounded-lg border border-primary-200">
            <span className="text-primary-900">Health Check Alerts</span>
            <input type="checkbox" defaultChecked className="toggle" />
          </div>
          <div className="flex items-center justify-between p-3 bg-primary-50 backdrop-blur-sm rounded-lg border border-primary-200">
            <span className="text-primary-900">Diet Plan Notifications</span>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between p-3 bg-primary-50 backdrop-blur-sm rounded-lg border border-primary-200">
            <span className="text-primary-900">Emergency Alerts</span>
            <input type="checkbox" defaultChecked className="toggle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;


