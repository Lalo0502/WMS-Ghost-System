import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { Truck, Search, Plus } from 'lucide-react';

const mockCarriers = [
  { id: 1, name: 'FastFreight Logistics', type: 'Ground', contact: 'Tom Wilson', phone: '(555) 123-4567', status: 'Active' },
  { id: 2, name: 'AirSpeed Express', type: 'Air', contact: 'Mary Johnson', phone: '(555) 234-5678', status: 'Active' },
  { id: 3, name: 'SeaWay Shipping', type: 'Ocean', contact: 'James Brown', phone: '(555) 345-6789', status: 'Inactive' }
];

export default function Carriers() {
  return (
    <div>
      <PageHeader 
        title="Carrier Management"
        description="View and manage carrier information"
      />

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search carriers..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              <Plus className="w-5 h-5 mr-2" />
              Add Carrier
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockCarriers.map((carrier) => (
                <tr key={carrier.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Truck className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{carrier.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{carrier.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{carrier.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{carrier.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      carrier.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {carrier.status}
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