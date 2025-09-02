import React, { useState } from 'react';
import { useAuth, authFetch } from '../contexts/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDeleteAccount = async () => {
    if (!showDeleteConfirm) {
      setShowDeleteConfirm(true);
      return;
    }

    setIsDeleting(true);
    try {
      console.log('Starting delete account process...');
      console.log('User ID:', user?.id);
      console.log('Token:', localStorage.getItem('token'));
      
      const response = await authFetch('http://localhost:5000/api/auth/delete-account', {
        method: 'DELETE'
      });

      console.log('Delete response status:', response.status);
      console.log('Delete response ok:', response.ok);

      if (response.ok) {
        console.log('Account deleted successfully, logging out...');
        // Account deleted successfully, logout user
        logout();
      } else {
        const data = await response.json();
        console.error('Delete failed:', data);
        alert(data.message || 'Failed to delete account');
      }
    } catch (error) {
      console.error('Delete account error:', error);
      alert('Network error. Please try again.');
    } finally {
      setIsDeleting(false);
      setShowDeleteConfirm(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="space-y-8">
      <div className="glass rounded-3xl p-8 shadow-elegant hover-lift">
        <div className="flex items-center space-x-6 mb-8">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 via-accent-500 to-secondary-600 rounded-3xl flex items-center justify-center shadow-elegant">
              <span className="text-3xl text-white font-bold">
                {user?.profile?.firstName?.[0] || user?.email?.[0] || '👤'}
              </span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full border-4 border-white flex items-center justify-center shadow-soft">
              <span className="text-white text-sm">✓</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-neutral-800 mb-2">
              {user?.profile?.firstName && user?.profile?.lastName 
                ? `${user.profile.firstName} ${user.profile.lastName}`
                : user?.profile?.username || 'User Profile'
              }
            </h2>
            <p className="text-neutral-600 text-lg">@{user?.profile?.username || user?.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-4 hover-lift">
              <label className="block text-sm font-medium text-neutral-600 mb-2">Email Address</label>
              <p className="text-neutral-800 text-lg font-medium">{user?.email}</p>
            </div>
            
            {user?.profile?.username && (
              <div className="glass rounded-2xl p-4 hover-lift">
                <label className="block text-sm font-medium text-neutral-600 mb-2">Username</label>
                <p className="text-neutral-800 text-lg font-medium">@{user.profile.username}</p>
              </div>
            )}

            {user?.profile?.age && (
              <div className="glass rounded-2xl p-4 hover-lift">
                <label className="block text-sm font-medium text-neutral-600 mb-2">Age</label>
                <p className="text-neutral-800 text-lg font-medium">{user.profile.age} years old</p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {user?.profile?.gender && (
              <div className="glass rounded-2xl p-4 hover-lift">
                <label className="block text-sm font-medium text-neutral-600 mb-2">Gender</label>
                <p className="text-neutral-800 text-lg font-medium capitalize">{user.profile.gender}</p>
              </div>
            )}

            <div className="glass rounded-2xl p-4 hover-lift">
              <label className="block text-sm font-medium text-neutral-600 mb-2">Member Since</label>
              <p className="text-neutral-800 text-lg font-medium">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Recently'}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/20">
          <button
            onClick={handleLogout}
            className="flex-1 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white py-4 px-8 rounded-2xl hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-3 hover-lift shadow-soft"
          >
            <span className="text-xl">🚪</span>
            <span>Logout</span>
          </button>
          
          <button
            onClick={handleDeleteAccount}
            disabled={isDeleting}
            className={`flex-1 py-4 px-8 rounded-2xl transition-all duration-300 font-semibold flex items-center justify-center space-x-3 hover-lift shadow-soft ${
              showDeleteConfirm 
                ? 'bg-gradient-to-r from-error-500 to-error-600 text-white hover:from-error-600 hover:to-error-700' 
                : 'bg-gradient-to-r from-error-50 to-error-100 text-error-600 hover:from-error-100 hover:to-error-200'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isDeleting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Deleting...</span>
              </>
            ) : (
              <>
                <span className="text-xl">🗑️</span>
                <span>{showDeleteConfirm ? 'Confirm Delete' : 'Delete Account'}</span>
              </>
            )}
          </button>
        </div>

        {showDeleteConfirm && (
          <div className="mt-6 p-6 glass rounded-2xl border border-error-200">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-error-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-error-600 text-lg">⚠️</span>
              </div>
              <div>
                <p className="text-error-800 font-semibold mb-1">Warning</p>
                <p className="text-error-700 text-sm">
                  This action cannot be undone. All your data will be permanently deleted.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
