import React from 'react';

interface PickListFiltersProps {
  selectedPriority: string;
  selectedStatus: string;
  onPriorityChange: (priority: string) => void;
  onStatusChange: (status: string) => void;
}

export default function PickListFilters({
  selectedPriority,
  selectedStatus,
  onPriorityChange,
  onStatusChange
}: PickListFiltersProps) {
  return (
    <div className="p-4 bg-gray-50 border-b border-gray-200">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-auto">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            id="status"
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full sm:w-auto rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="w-full sm:w-auto">
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            id="priority"
            value={selectedPriority}
            onChange={(e) => onPriorityChange(e.target.value)}
            className="w-full sm:w-auto rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}