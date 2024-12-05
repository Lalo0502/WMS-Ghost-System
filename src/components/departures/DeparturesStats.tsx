import React from 'react';
import { Truck, Clock, AlertTriangle, TrendingUp } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Today\'s Departures',
    value: '24',
    change: '+12%',
    changeType: 'increase',
    icon: Truck,
    color: 'blue'
  },
  {
    id: 2,
    name: 'On-Time Rate',
    value: '96%',
    change: '+3%',
    changeType: 'increase',
    icon: Clock,
    color: 'green'
  },
  {
    id: 3,
    name: 'Delayed Shipments',
    value: '2',
    change: '-5%',
    changeType: 'decrease',
    icon: AlertTriangle,
    color: 'red'
  },
  {
    id: 4,
    name: 'Capacity Utilization',
    value: '85%',
    change: '+8%',
    changeType: 'increase',
    icon: TrendingUp,
    color: 'indigo'
  }
];

export default function DeparturesStats() {
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
                <span className="ml-2">vs last week</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}