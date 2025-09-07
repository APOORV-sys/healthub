import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';
import Monitoring from './components/Monitoring';
import Alerts from './components/Alerts';
import Education from './components/Education';
import Diet from './components/Diet';
import Medication from './components/Medication';
import Profile from './components/Profile';

const AppContent = () => {
  const { isAuthenticated, loading, user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-azure-web">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tiffany-blue mx-auto mb-4"></div>
          <p className="text-drab-dark-brown">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login or register page if not authenticated
  if (!isAuthenticated) {
    if (showRegister) {
      return <RegisterPage onSwitchToLogin={() => setShowRegister(false)} />;
    }
    return <LoginPage onLoginSuccess={() => console.log('Login successful')} onSwitchToRegister={() => setShowRegister(true)} />;
  }

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊', component: Dashboard },
    { id: 'chatbot', name: 'Health Assistant', icon: '💬', component: Chatbot },
    { id: 'monitoring', name: 'Health Tracking', icon: '📈', component: Monitoring },
    { id: 'alerts', name: 'Alerts & Notifications', icon: '🔔', component: Alerts },
    { id: 'education', name: 'Educational Resources', icon: '📚', component: Education },
    { id: 'diet', name: 'Diet Chart', icon: '🍽️', component: Diet },
    { id: 'medication', name: 'Medication Support', icon: '💊', component: Medication },
    { id: 'profile', name: 'Profile', icon: '👤', component: Profile }
  ];

  const renderActiveComponent = () => {
    const navItem = navigation.find(nav => nav.id === activeTab);
    if (navItem && navItem.component) {
      const Component = navItem.component;
      return <Component />;
    }
    return <Dashboard />;
  };

  return (
    <div className="min-h-screen bg-azure-web flex flex-col">
      {/* Mobile menu overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex flex-1">
              {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 bg-french-gray/90 backdrop-blur-sm shadow-lg transform transition-all duration-500 ease-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        ${sidebarCollapsed ? 'w-20' : 'w-72'}
        lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 px-4 border-b border-tiffany-blue/20">
          <button
            onClick={() => setSidebarCollapsed((prev) => !prev)}
            className="flex items-center space-x-3 select-none hover:bg-tiffany-blue/20 rounded-xl p-2 transition-all duration-300"
            aria-label="Toggle sidebar"
          >
            <div className="w-8 h-8 bg-tiffany-blue rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-drab-dark-brown font-bold text-sm">H</span>
            </div>
            {!sidebarCollapsed && (
              <span className="text-lg font-semibold text-drab-dark-brown tracking-wide transition-all duration-500">HealthHub</span>
            )}
          </button>
        </div>
        <nav className="mt-6 px-3 flex flex-col space-y-1">
          {navigation.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`group flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-300 w-full
                ${activeTab === item.id
                  ? 'bg-tiffany-blue text-drab-dark-brown shadow-md'
                  : 'text-drab-dark-brown hover:bg-french-gray/60'
                }
                ${sidebarCollapsed ? 'justify-center px-1' : 'justify-start'}
                fade-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className={`text-lg transition-transform duration-300 ${activeTab === item.id ? 'scale-110' : 'group-hover:scale-105'}`}>
                {item.icon}
              </span>
              {!sidebarCollapsed && (
                <span className="font-medium transition-all duration-300">{item.name}</span>
              )}
            </button>
          ))}
        </nav>
      </div>

        {/* Main content */}
        <div className={`flex-1 min-h-screen flex flex-col transition-all duration-500 ease-out ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-72'}`}>
          {/* Simple Header */}
          <header className="text-white border-b border-french-gray shadow-sm rounded-lg" style={{ backgroundColor: '#333333' }}>
            <div className="flex items-center justify-between h-12 px-4 sm:px-6 lg:px-8">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-white hover:bg-french-gray/20 p-2 rounded-lg transition-colors"
              >
                <span className="text-xl">❤️</span>
              </button>

              {/* Logo and Title */}
              <div className="flex-1 flex items-center justify-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-tiffany-blue rounded-lg flex items-center justify-center">
                    <span className="text-drab-dark-brown font-bold text-sm">H</span>
                  </div>
                  <h1 className="text-xl font-semibold text-white">HealthHub</h1>
                </div>
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-french-gray hidden sm:block">
                  {user?.profile?.firstName || user?.email}
                </span>
                <div className="w-8 h-8 bg-french-gray rounded-full flex items-center justify-center">
                  <span className="text-drab-dark-brown text-sm font-medium">
                    {user?.profile?.firstName?.[0] || user?.email?.[0] || '👤'}
                  </span>
                </div>
              </div>
            </div>
          </header>
          {/* Page content */}
          <main className="p-6 sm:p-8 md:p-10 w-full max-w-full flex-1 overflow-auto">
            <div className="fade-in">
              {renderActiveComponent()}
            </div>
          </main>
        </div>
      </div>
      <footer className="bg-french-gray/80 backdrop-blur-sm border-t border-tiffany-blue/30 text-center py-4 text-drab-dark-brown text-sm">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-6 h-6 bg-tiffany-blue rounded-lg flex items-center justify-center">
            <span className="text-drab-dark-brown text-xs font-bold">H</span>
          </div>
          <span>&copy; {new Date().getFullYear()} HealthHub. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;


