import React from 'react';
import { FileText, Download, Clock, TrendingUp } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Generated Reports',
    value: '128',
    change: '+12%',
    changeType: 'increase',
    icon: FileText,
    color: 'blue'
  },
  {
    id: 2,
    name: 'Downloads',
    value: '2,456',
    change: '+8%',
    changeType: 'increase',
    icon: Download,
    color: 'green'
  },
  {
    id: 3,
    name: 'Processing Time',
    value: '1.2s',
    change: '-15%',
    changeType: 'decrease',
    icon: Clock,
    color: 'indigo'
  },
  {
    id: 4,
    name: 'Data Points',
    value: '1.2M',
    change: '+25%',
    changeType: 'increase',
    icon: TrendingUp,
    color: 'purple'
  }
];

export default function ReportsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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