import React from 'react';
import { Calendar, Filter, Plus } from 'lucide-react';

interface DeparturesFiltersProps {
  selectedDate: string;
  selectedStatus: string;
  onDateChange: (date: string) => void;
  onStatusChange: (status: string) => void;
  onSchedule: () => void;
}

export default function DeparturesFilters({
  selectedDate,
  selectedStatus,
  onDateChange,
  onStatusChange,
  onSchedule
}: DeparturesFiltersProps) {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => onDateChange(e.target.value)}
              className="w-full sm:w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full sm:w-auto pl-4 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="scheduled">Scheduled</option>
            <option value="loading">Loading</option>
            <option value="departed">Departed</option>
            <option value="completed">Completed</option>
          </select>

          <button className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">More Filters</span>
          </button>
        </div>

        <button
          onClick={onSchedule}
          className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 sm:mr-2" />
          <span className="hidden sm:inline">Schedule Departure</span>
        </button>
      </div>
    </div>
  );
}