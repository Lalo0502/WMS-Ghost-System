import React from 'react';
import { CheckCircle2, Clock, AlertCircle, ChevronDown, MoreVertical, UserCircle } from 'lucide-react';

interface PickListTableProps {
  pickLists: any[];
  onAssigneeChange: (pickListId: number, assignee: string) => void;
  onStatusChange: (pickListId: number, status: string) => void;
  onPriorityChange: (pickListId: number, priority: string) => void;
}

export default function PickListTable({
  pickLists,
  onAssigneeChange,
  onStatusChange,
  onPriorityChange
}: PickListTableProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'In Progress':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  // Mobile card view for each pick list
  const MobileCard = ({ list }: { list: any }) => (
    <div className="bg-white p-4 border-b border-gray-200 last:border-b-0">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{list.order}</h3>
          <p className="text-sm text-gray-500">{list.customer}</p>
        </div>
        <button className="text-gray-400 hover:text-gray-500">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Status</span>
          <div className="flex items-center">
            {getStatusIcon(list.status)}
            <span className="ml-2 text-sm text-gray-900">{list.status}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Priority</span>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            list.priority === 'High' ? 'bg-red-100 text-red-800' :
            list.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {list.priority}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Progress</span>
          <div className="flex items-center space-x-2">
            <div className="w-24 bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  list.status === 'Completed' ? 'bg-green-600' :
                  list.status === 'In Progress' ? 'bg-blue-600' :
                  'bg-gray-600'
                }`}
                style={{ width: `${list.progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-500">{list.progress}%</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Due Date</span>
          <span className="text-sm text-gray-900">{list.dueDate}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Assignee</span>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-xs font-medium text-gray-600">
                {list.assignee.split(' ').map((n: string) => n[0]).join('')}
              </span>
            </div>
            <span className="ml-2 text-sm text-gray-900">{list.assignee}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Mobile view */}
      <div className="sm:hidden divide-y divide-gray-200">
        {pickLists.map((list) => (
          <MobileCard key={list.id} list={list} />
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden sm:block">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignee</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pickLists.map((list) => (
              <tr key={list.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{list.order}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{list.customer}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{list.items.length} items</div>
                  <div className="text-xs text-gray-500">
                    {list.items.reduce((acc: number, item: any) => acc + item.quantity, 0)} units
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(list.status)}
                    <span className="ml-2 text-sm text-gray-900">{list.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    list.priority === 'High' ? 'bg-red-100 text-red-800' :
                    list.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {list.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        list.status === 'Completed' ? 'bg-green-600' :
                        list.status === 'In Progress' ? 'bg-blue-600' :
                        'bg-gray-600'
                      }`}
                      style={{ width: `${list.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{list.progress}%</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{list.dueDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        {list.assignee.split(' ').map((n: string) => n[0]).join('')}
                      </span>
                    </div>
                    <div className="ml-2">
                      <div className="text-sm font-medium text-gray-900">{list.assignee}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}