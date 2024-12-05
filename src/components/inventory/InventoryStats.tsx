import React from 'react';
import { Package, AlertTriangle, TrendingUp, Clock } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Total Items',
    value: '2,345',
    icon: Package,
    change: '+4.75%',
    changeType: 'increase'
  },
  {
    id: 2,
    name: 'Low Stock Items',
    value: '12',
    icon: AlertTriangle,
    change: '-2.3%',
    changeType: 'decrease'
  },
  {
    id: 3,
    name: 'Turnover Rate',
    value: '85%',
    icon: TrendingUp,
    change: '+2.1%',
    changeType: 'increase'
  },
  {
    id: 4,
    name: 'Pending Orders',
    value: '28',
    icon: Clock,
    change: '+12.5%',
    changeType: 'increase'
  }
];

export default function InventoryStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="mt-1 text-xl sm:text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${
                stat.name === 'Low Stock Items' ? 'bg-red-100' : 'bg-blue-100'
              }`}>
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  stat.name === 'Low Stock Items' ? 'text-red-600' : 'text-blue-600'
                }`} />
              </div>
            </div>
            <div className="mt-4">
              <span className={`inline-flex items-center text-xs sm:text-sm ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
                <span className="ml-2">vs last month</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}