import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { Tags, Search, Plus } from 'lucide-react';

const mockParts = [
  { id: 1, partNumber: 'PN-001', description: 'Steel Pipe 2"', category: 'Pipes', uom: 'PCS', status: 'Active' },
  { id: 2, partNumber: 'PN-002', description: 'Copper Wire 12AWG', category: 'Electrical', uom: 'MTR', status: 'Active' },
  { id: 3, partNumber: 'PN-003', description: 'Lumber 2x4', category: 'Wood', uom: 'PCS', status: 'Discontinued' }
];

export default function PartNumber() {
  return (
    <div>
      <PageHeader 
        title="Part Number Management"
        description="View and manage part numbers and specifications"
      />

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search part numbers..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              <Plus className="w-5 h-5 mr-2" />
              Add Part Number
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Part Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UOM</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockParts.map((part) => (
                <tr key={part.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Tags className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{part.partNumber}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{part.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{part.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{part.uom}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      part.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {part.status}
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