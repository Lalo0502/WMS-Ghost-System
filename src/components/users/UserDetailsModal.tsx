import React from 'react';
import { format } from 'date-fns';
import { User } from '../../types/user';
import { X, Shield, Clock, CheckCircle2, XCircle } from 'lucide-react';

interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

export default function UserDetailsModal({
  isOpen,
  onClose,
  user
}: UserDetailsModalProps) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">User Details</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center mb-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full"
            />
            <div className="ml-4">
              <h4 className="text-xl font-medium text-gray-900">{user.name}</h4>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-4">Basic Information</h5>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-500">Role</dt>
                  <dd className="text-sm text-gray-900 flex items-center">
                    <Shield className="w-4 h-4 text-gray-400 mr-1" />
                    {user.role}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-500">Department</dt>
                  <dd className="text-sm text-gray-900">{user.department}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-500">Status</dt>
                  <dd className="text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status === 'active' ? (
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                      ) : (
                        <XCircle className="w-4 h-4 mr-1" />
                      )}
                      {user.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-500">Last Active</dt>
                  <dd className="text-sm text-gray-900 flex items-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-1" />
                    {format(new Date(user.lastActive), 'MMM d, h:mm a')}
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-4">Permissions</h5>
              <div className="space-y-2">
                {user.permissions.map((permission) => (
                  <div
                    key={permission}
                    className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <span className="text-sm text-gray-900">{permission}</span>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h5 className="text-sm font-medium text-gray-700 mb-4">Recent Activity</h5>
            <div className="space-y-3">
              {user.recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">
                      {format(new Date(activity.timestamp), 'MMM d, h:mm a')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}