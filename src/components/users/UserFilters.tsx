import React from 'react';
import { Search, Filter, Plus, ArrowUpDown } from 'lucide-react';

interface UserFiltersProps {
  filters: {
    search: string;
    department: string;
    role: string;
    status: string;
  };
  onFilterChange: (filters: any) => void;
  onCreateNew: () => void;
}

export default function UserFilters({
  filters,
  onFilterChange,
  onCreateNew
}: UserFiltersProps) {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex flex-col space-y-4">
        <div className="w-full">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={filters.search}
              onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <select
            value={filters.department}
            onChange={(e) => onFilterChange({ ...filters, department: e.target.value })}
            className="w-full sm:w-auto pl-3 pr-10 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Departments</option>
            <option value="operations">Operations</option>
            <option value="inventory">Inventory</option>
            <option value="logistics">Logistics</option>
          </select>

          <select
            value={filters.role}
            onChange={(e) => onFilterChange({ ...filters, role: e.target.value })}
            className="w-full sm:w-auto pl-3 pr-10 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Roles</option>
            <option value="manager">Manager</option>
            <option value="specialist">Specialist</option>
            <option value="coordinator">Coordinator</option>
          </select>

          <select
            value={filters.status}
            onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
            className="w-full sm:w-auto pl-3 pr-10 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4 sm:mr-2" />
            <span>More Filters</span>
          </button>

          <button className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <ArrowUpDown className="w-4 h-4 sm:mr-2" />
            <span>Sort</span>
          </button>

          <button
            onClick={onCreateNew}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 sm:mr-2" />
            <span>Add User</span>
          </button>
        </div>
      </div>
    </div>
  );
}