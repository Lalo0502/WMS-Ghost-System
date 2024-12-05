import React from 'react';
import { Users, UserCheck, UserX, Shield } from 'lucide-react';
import { User } from '../../types/user';

interface UserStatsProps {
  users: User[];
}

export default function UserStats({ users }: UserStatsProps) {
  const stats = [
    {
      id: 1,
      name: 'Total Users',
      value: users.length,
      icon: Users,
      color: 'blue',
      change: '+12%'
    },
    {
      id: 2,
      name: 'Active Users',
      value: users.filter(u => u.status === 'active').length,
      icon: UserCheck,
      color: 'green',
      change: '+8%'
    },
    {
      id: 3,
      name: 'Inactive Users',
      value: users.filter(u => u.status === 'inactive').length,
      icon: UserX,
      color: 'red',
      change: '-5%'
    },
    {
      id: 4,
      name: 'Admin Users',
      value: users.filter(u => u.role.toLowerCase().includes('manager')).length,
      icon: Shield,
      color: 'purple',
      change: '+2%'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                <Icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
            <div className="mt-4">
              <span className={`inline-flex items-center text-sm ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
                <span className="ml-2 hidden sm:inline">vs last month</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}