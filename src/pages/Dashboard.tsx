import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import { 
  BarChart3, Package, Truck, Clock, ArrowUp, ArrowDown,
  Users, AlertTriangle, TrendingUp, ArrowRightLeft, Calendar
} from 'lucide-react';

const realtimeMetrics = [
  { 
    id: 1,
    name: 'Total Inventory',
    value: '12,456',
    change: '+2.5%',
    trend: 'up',
    icon: Package,
    color: 'blue'
  },
  {
    id: 2,
    name: 'Active Orders',
    value: '156',
    change: '-4.1%',
    trend: 'down',
    icon: Clock,
    color: 'indigo'
  },
  {
    id: 3,
    name: 'Today\'s Shipments',
    value: '28',
    change: '+8.2%',
    trend: 'up',
    icon: Truck,
    color: 'green'
  },
  {
    id: 4,
    name: 'Warehouse Capacity',
    value: '78%',
    change: '+1.2%',
    trend: 'up',
    icon: BarChart3,
    color: 'purple'
  }
];

const alerts = [
  {
    id: 1,
    type: 'inventory',
    message: 'Low stock alert: Steel Pipes (SKU: WH-1001)',
    time: '10 minutes ago',
    severity: 'high'
  },
  {
    id: 2,
    type: 'shipment',
    message: 'Delayed shipment: SHP-2024-002 to Chicago',
    time: '25 minutes ago',
    severity: 'medium'
  },
  {
    id: 3,
    type: 'system',
    message: 'System maintenance scheduled for tonight',
    time: '1 hour ago',
    severity: 'low'
  }
];

const upcomingActivities = [
  {
    id: 1,
    type: 'pickup',
    title: 'Inventory Pickup',
    time: '14:30',
    details: 'Order #PO-2024-001 - 5 items',
    status: 'pending'
  },
  {
    id: 2,
    type: 'departure',
    title: 'Scheduled Departure',
    time: '15:45',
    details: 'SHP-2024-005 to Miami',
    status: 'scheduled'
  },
  {
    id: 3,
    type: 'transload',
    title: 'Cross-Docking',
    time: '16:15',
    details: 'TL-2024-008 - Dock A to C',
    status: 'upcoming'
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Dashboard"
        description="Real-time overview of warehouse operations and key metrics"
      />

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {realtimeMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.id} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-2">{metric.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-${metric.color}-100`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${metric.color}-600`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {metric.trend === 'up' ? (
                  <ArrowUp className="w-4 h-4 text-green-500" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-red-500" />
                )}
                <span className={`text-sm ml-1 ${
                  metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.change}
                </span>
                <span className="text-xs sm:text-sm text-gray-500 ml-2">vs last week</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Metrics */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2 sm:mb-0">Performance Overview</h3>
              <select className="rounded-md border-gray-300 text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="h-[300px] sm:h-[400px]">
              <PerformanceChart />
            </div>
          </div>
        </div>

        {/* Alerts and Quick Stats */}
        <div className="space-y-6">
          {/* Alerts */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Alerts</h3>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`flex items-start p-3 rounded-lg ${
                    alert.severity === 'high' ? 'bg-red-50' :
                    alert.severity === 'medium' ? 'bg-yellow-50' :
                    'bg-blue-50'
                  }`}
                >
                  <AlertTriangle className={`w-5 h-5 mt-0.5 ${
                    alert.severity === 'high' ? 'text-red-500' :
                    alert.severity === 'medium' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`} />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="ml-2 text-sm text-gray-600">Active Workers</span>
                </div>
                <span className="text-sm font-medium text-gray-900">24</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="ml-2 text-sm text-gray-600">Efficiency Rate</span>
                </div>
                <span className="text-sm font-medium text-gray-900">92%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ArrowRightLeft className="w-5 h-5 text-purple-500" />
                  <span className="ml-2 text-sm text-gray-600">Active Transloads</span>
                </div>
                <span className="text-sm font-medium text-gray-900">8</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Activities */}
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2 sm:mb-0">Upcoming Activities</h3>
          <button className="flex items-center text-sm text-blue-600 hover:text-blue-700">
            <Calendar className="w-4 h-4 mr-1" />
            View Calendar
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingActivities.map((activity) => (
            <div key={activity.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  activity.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {activity.status}
                </span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
              <h4 className="text-sm font-medium text-gray-900">{activity.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{activity.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}