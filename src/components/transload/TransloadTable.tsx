import React from 'react';
import { ArrowRightLeft, ThermometerSun, Droplets, Package, Eye, MoreVertical } from 'lucide-react';

interface TransloadTableProps {
  transloads: any[];
  onViewDetails: (transload: any) => void;
  onStatusChange: (transloadId: number, status: string) => void;
}

export default function TransloadTable({
  transloads,
  onViewDetails,
  onStatusChange
}: TransloadTableProps) {
  // Mobile card view for each transload
  const MobileCard = ({ transload }: { transload: any }) => (
    <div className="bg-white p-4 border-b border-gray-200 last:border-b-0">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{transload.reference}</h3>
          <div className="flex items-center mt-1">
            <ArrowRightLeft className="w-4 h-4 text-gray-400 mr-1" />
            <span className="text-sm text-gray-500">{transload.items.length} items</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onViewDetails(transload)}
            className="text-blue-600 hover:text-blue-900"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-500">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Status</span>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            transload.status === 'Completed' ? 'bg-green-100 text-green-800' :
            transload.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {transload.status}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Priority</span>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            transload.priority === 'High' ? 'bg-red-100 text-red-800' :
            transload.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {transload.priority}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Source</span>
          <div className="text-right">
            <div className="text-sm text-gray-900">{transload.source.dock}</div>
            <div className="text-xs text-gray-500">{transload.source.carrier}</div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Destination</span>
          <div className="text-right">
            <div className="text-sm text-gray-900">{transload.destination.dock}</div>
            <div className="text-xs text-gray-500">{transload.destination.carrier}</div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Progress</span>
          <div className="flex items-center space-x-2">
            <div className="w-24 bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  transload.completionRate === 100 ? 'bg-green-600' :
                  transload.completionRate > 0 ? 'bg-blue-600' :
                  'bg-gray-600'
                }`}
                style={{ width: `${transload.completionRate}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-500">{transload.completionRate}%</span>
          </div>
        </div>

        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center">
            <ThermometerSun className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-sm text-gray-500">{transload.temperature}</span>
          </div>
          <div className="flex items-center">
            <Droplets className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-sm text-gray-500">{transload.humidity}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Mobile view */}
      <div className="sm:hidden">
        {transloads.map((transload) => (
          <MobileCard key={transload.id} transload={transload} />
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden sm:block">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source/Destination</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conditions</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transloads.map((transload) => (
              <tr key={transload.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <ArrowRightLeft className="h-5 w-5 text-gray-400" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{transload.reference}</div>
                      <div className="text-xs text-gray-500">
                        {transload.items.length} items
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{transload.source.dock}</div>
                  <div className="text-xs text-gray-500">{transload.source.carrier}</div>
                  <div className="flex items-center text-xs text-blue-600 mt-1">
                    <ArrowRightLeft className="h-3 w-3 mr-1" />
                    <span>{transload.destination.dock}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    transload.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    transload.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {transload.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    transload.priority === 'High' ? 'bg-red-100 text-red-800' :
                    transload.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {transload.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        transload.completionRate === 100 ? 'bg-green-600' :
                        transload.completionRate > 0 ? 'bg-blue-600' :
                        'bg-gray-600'
                      }`}
                      style={{ width: `${transload.completionRate}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{transload.completionRate}%</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <ThermometerSun className="h-4 w-4 text-gray-400" />
                      <span className="ml-1 text-sm text-gray-500">{transload.temperature}</span>
                    </div>
                    <div className="flex items-center">
                      <Droplets className="h-4 w-4 text-gray-400" />
                      <span className="ml-1 text-sm text-gray-500">{transload.humidity}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => onViewDetails(transload)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}