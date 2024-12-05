import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { Building2, Search, Plus } from 'lucide-react';

const mockConsignees = [
  { id: 1, name: 'West Coast Distribution', address: '123 Harbor Dr, Los Angeles, CA', contact: 'Sarah Wilson', phone: '(555) 111-2233', status: 'Active' },
  { id: 2, name: 'Midwest Logistics', address: '456 Industrial Pkwy, Chicago, IL', contact: 'Robert Brown', phone: '(555) 444-5566', status: 'Active' },
  { id: 3, name: 'East Coast Shipping', address: '789 Port Ave, Miami, FL', contact: 'Lisa Davis', phone: '(555) 777-8899', status: 'Inactive' }
];

export default function Consignees() {
  return (
    <div>
      <PageHeader 
        title="Consignee Management"
        description="View and manage consignee information"
      />

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search consignees..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              <Plus className="w-5 h-5 mr-2" />
              Add Consignee
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockConsignees.map((consignee) => (
                <tr key={consignee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Building2 className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{consignee.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{consignee.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{consignee.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{consignee.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      consignee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {consignee.status}
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