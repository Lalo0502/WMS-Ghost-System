import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { Building2, Search, Plus } from 'lucide-react';

const mockWarehouses = [
  { id: 1, name: 'Main Distribution Center', location: 'Los Angeles, CA', capacity: '100,000 sq ft', utilization: '75%', status: 'Active' },
  { id: 2, name: 'East Coast Hub', location: 'Newark, NJ', capacity: '80,000 sq ft', utilization: '60%', status: 'Active' },
  { id: 3, name: 'Midwest Facility', location: 'Chicago, IL', capacity: '120,000 sq ft', utilization: '45%', status: 'Maintenance' }
];

export default function Warehouse() {
  return (
    <div>
      <PageHeader 
        title="Warehouse Management"
        description="View and manage warehouse facilities"
      />

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search warehouses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              <Plus className="w-5 h-5 mr-2" />
              Add Warehouse
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilization</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockWarehouses.map((warehouse) => (
                <tr key={warehouse.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Building2 className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{warehouse.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{warehouse.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{warehouse.capacity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{warehouse.utilization}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      warehouse.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {warehouse.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}