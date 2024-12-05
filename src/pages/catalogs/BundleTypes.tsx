import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { Package, Search, Plus } from 'lucide-react';

const mockBundleTypes = [
  { id: 1, name: 'Standard Pallet', dimensions: '48" x 40" x 48"', maxWeight: '2200 lbs', category: 'Palletized', status: 'Active' },
  { id: 2, name: 'Small Box', dimensions: '12" x 12" x 12"', maxWeight: '50 lbs', category: 'Boxed', status: 'Active' },
  { id: 3, name: 'Bulk Container', dimensions: '96" x 48" x 48"', maxWeight: '4400 lbs', category: 'Container', status: 'Inactive' }
];

export default function BundleTypes() {
  return (
    <div>
      <PageHeader 
        title="Bundle Type Management"
        description="View and manage bundle types and specifications"
      />

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search bundle types..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              <Plus className="w-5 h-5 mr-2" />
              Add Bundle Type
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dimensions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Weight</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockBundleTypes.map((bundle) => (
                <tr key={bundle.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Package className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{bundle.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bundle.dimensions}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bundle.maxWeight}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bundle.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      bundle.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {bundle.status}
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