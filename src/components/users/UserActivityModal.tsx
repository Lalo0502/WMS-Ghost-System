import React from 'react';
import { format } from 'date-fns';
import { User } from '../../types/user';
import { X, Activity, Package, Truck, FileText } from 'lucide-react';

interface UserActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

const activityIcons: { [key: string]: any } = {
  inventory: Package,
  shipment: Truck,
  document: FileText,
  default: Activity
};

export default function UserActivityModal({
  isOpen,
  onClose,
  user
}: UserActivityModalProps) {
  if (!isOpen || !user) return null;

  const getActivityIcon = (type: string) => {
    const Icon = activityIcons[type] || activityIcons.default;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-gray-900">User Activity</h3>
            <p className="mt-1 text-sm text-gray-500">{user.name}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flow-root">
            <ul className="-mb-8">
              {user.recentActivity.map((activity, index) => (
                <li key={activity.id}>
                  <div className="relative pb-8">
                    {index !== user.recentActivity.length - 1 && (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative flex space-x-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        activity.type === 'inventory' ? 'bg-blue-100' :
                        activity.type === 'shipment' ? 'bg-green-100' :
                        'bg-gray-100'
                      }`}>
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-gray-900">{activity.action}</p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                          {format(new Date(activity.timestamp), 'MMM d, h:mm a')}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}