import React from 'react';
import { format } from 'date-fns';
import { User } from '../../types/user';
import { 
  MoreVertical, 
  Eye, 
  History, 
  Shield, 
  Clock,
  CheckCircle2,
  XCircle,
  Settings,
  ChevronRight
} from 'lucide-react';

interface UsersListProps {
  users: User[];
  onViewDetails: (user: User) => void;
  onViewActivity: (user: User) => void;
  onUpdateStatus: (userId: number, status: string) => void;
  onUpdateRole: (userId: number, role: string) => void;
}

export default function UsersList({
  users,
  onViewDetails,
  onViewActivity,
  onUpdateStatus,
  onUpdateRole
}: UsersListProps) {
  // Mobile card view for each user
  const MobileCard = ({ user }: { user: User }) => (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-base font-medium text-gray-900">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        <button
          onClick={() => onViewDetails(user)}
          className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Role</span>
          </div>
          <span className="text-sm font-medium text-gray-900">{user.role}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Last Active</span>
          </div>
          <span className="text-sm text-gray-900">
            {format(new Date(user.lastActive), 'MMM d, h:mm a')}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Status</span>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {user.status === 'active' ? (
              <CheckCircle2 className="w-3 h-3 mr-1" />
            ) : (
              <XCircle className="w-3 h-3 mr-1" />
            )}
            {user.status === 'active' ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
        <button
          onClick={() => onViewActivity(user)}
          className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
        >
          <History className="w-4 h-4 mr-1" />
          Activity
        </button>
        <button
          className="text-sm text-gray-600 hover:text-gray-800 flex items-center"
        >
          <Settings className="w-4 h-4 mr-1" />
          Settings
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {/* Mobile view */}
      <div className="md:hidden">
        {users.map((user) => (
          <MobileCard key={user.id} user={user} />
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-900">{user.role}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
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
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    {format(new Date(user.lastActive), 'MMM d, h:mm a')}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => onViewDetails(user)}
                      className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
                      title="View Details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => onViewActivity(user)}
                      className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
                      title="View Activity"
                    >
                      <History className="w-5 h-5" />
                    </button>
                    <button
                      className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
                      title="Settings"
                    >
                      <Settings className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}