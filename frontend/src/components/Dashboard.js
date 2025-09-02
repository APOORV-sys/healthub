import React from 'react';

const Dashboard = () => {
  const alerts = [
    { id: 1, type: 'warning', message: 'Medication reminder: Take your morning pills', time: '9:00 AM' },
    { id: 2, type: 'info', message: 'Weekly health checkup scheduled for tomorrow', time: '2 hours ago' },
    { id: 3, type: 'success', message: 'Great job! You\'ve reached your daily step goal', time: '1 hour ago' }
  ];

  const healthMetrics = [
    { 
      id: 1, 
      title: 'Heart Rate', 
      value: '72 BPM', 
      icon: '❤️', 
      color: 'from-red-400 to-red-600',
      bgColor: 'from-red-50 to-red-100',
      change: '+2%'
    },
    { 
      id: 2, 
      title: 'Steps Today', 
      value: '8,432', 
      icon: '👟', 
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      change: '+15%'
    },
    { 
      id: 3, 
      title: 'Sleep Hours', 
      value: '7.5 hrs', 
      icon: '😴', 
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      change: '+0.5h'
    },
    { 
      id: 4, 
      title: 'Water Intake', 
      value: '6/8 cups', 
      icon: '💧', 
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100',
      change: '75%'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Health Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {healthMetrics.map((metric, index) => (
          <div 
            key={metric.id} 
            className={`glass rounded-3xl p-6 hover-lift fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center shadow-soft`}>
                <span className="text-2xl">{metric.icon}</span>
              </div>
              <div className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${metric.bgColor} text-neutral-700`}>
                {metric.change}
              </div>
            </div>
            <div>
              <p className="text-neutral-600 text-sm font-medium mb-1">{metric.title}</p>
              <p className="text-3xl font-bold text-neutral-800">{metric.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Alerts and Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Alerts */}
        <div className="glass rounded-3xl p-8 hover-lift">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-neutral-800">Recent Alerts</h3>
            <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div 
                key={alert.id} 
                className={`flex items-start space-x-4 p-4 glass rounded-2xl hover-lift slide-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  alert.type === 'warning' ? 'bg-warning-50' : 
                  alert.type === 'success' ? 'bg-success-50' : 'bg-secondary-50'
                }`}>
                  <span className="text-lg">
                    {alert.type === 'warning' ? '⚠️' : 
                     alert.type === 'success' ? '✅' : 'ℹ️'}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-neutral-800 font-medium mb-1">{alert.message}</p>
                  <p className="text-sm text-neutral-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="glass rounded-3xl p-8 hover-lift">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-neutral-800">Today's Summary</h3>
            <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 glass rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">🎯</span>
                </div>
                <div>
                  <p className="font-medium text-neutral-800">Goals Achieved</p>
                  <p className="text-sm text-neutral-500">3 out of 5</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-accent-600">60%</div>
            </div>
            
            <div className="flex items-center justify-between p-4 glass rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">📊</span>
                </div>
                <div>
                  <p className="font-medium text-neutral-800">Health Score</p>
                  <p className="text-sm text-neutral-500">Based on today's activity</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-secondary-600">85</div>
            </div>
            
            <div className="flex items-center justify-between p-4 glass rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-success-400 to-success-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">🏆</span>
                </div>
                <div>
                  <p className="font-medium text-neutral-800">Streak</p>
                  <p className="text-sm text-neutral-500">Days in a row</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-success-600">12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



