import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { CheckCircle2, Clock, AlertCircle, Filter, Search, Plus, ArrowUpDown, MoreVertical, UserCircle } from 'lucide-react';
import PickListStats from '../components/pick-list/PickListStats';
import PickListFilters from '../components/pick-list/PickListFilters';
import PickListTable from '../components/pick-list/PickListTable';
import CreatePickListModal from '../components/pick-list/CreatePickListModal';

const mockPickLists = [
  { 
    id: 1, 
    order: 'PO-2024-001', 
    customer: 'Acme Corp',
    items: [
      { id: 1, name: 'Steel Pipes', quantity: 50, location: 'A-101' },
      { id: 2, name: 'Copper Wire', quantity: 100, location: 'B-202' }
    ],
    status: 'In Progress',
    priority: 'High',
    assignee: 'John Doe',
    dueDate: '2024-03-20',
    progress: 65
  },
  { 
    id: 2, 
    order: 'PO-2024-002',
    customer: 'TechCorp Inc', 
    items: [
      { id: 3, name: 'Circuit Boards', quantity: 200, location: 'C-303' }
    ],
    status: 'Pending',
    priority: 'Medium',
    assignee: 'Jane Smith',
    dueDate: '2024-03-21',
    progress: 0
  },
  { 
    id: 3, 
    order: 'PO-2024-003',
    customer: 'Global Industries', 
    items: [
      { id: 4, name: 'Aluminum Sheets', quantity: 75, location: 'D-404' },
      { id: 5, name: 'Steel Bolts', quantity: 1000, location: 'E-505' },
      { id: 6, name: 'Rubber Gaskets', quantity: 500, location: 'F-606' }
    ],
    status: 'Completed',
    priority: 'Low',
    assignee: 'Mike Johnson',
    dueDate: '2024-03-19',
    progress: 100
  }
];

export default function PickListMonitor() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCreatePickList = (data: any) => {
    console.log('Creating pick list:', data);
    setShowCreateModal(false);
  };

  const handleAssigneeChange = (pickListId: number, assignee: string) => {
    console.log('Changing assignee:', pickListId, assignee);
  };

  const handleStatusChange = (pickListId: number, status: string) => {
    console.log('Changing status:', pickListId, status);
  };

  const handlePriorityChange = (pickListId: number, priority: string) => {
    console.log('Changing priority:', pickListId, priority);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <PageHeader 
        title="Pick List Monitor"
        description="Track and manage picking operations in real-time"
      />

      <PickListStats />

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            <div className="w-full sm:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search pick lists..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Filters</span>
              </button>
              
              <button className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <ArrowUpDown className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Sort</span>
              </button>
              
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Create Pick List</span>
              </button>
            </div>
          </div>
        </div>

        <PickListFilters
          selectedPriority={selectedPriority}
          selectedStatus={selectedStatus}
          onPriorityChange={setSelectedPriority}
          onStatusChange={setSelectedStatus}
        />

        <div className="overflow-x-auto">
          <PickListTable
            pickLists={mockPickLists}
            onAssigneeChange={handleAssigneeChange}
            onStatusChange={handleStatusChange}
            onPriorityChange={handlePriorityChange}
          />
        </div>
      </div>

      <CreatePickListModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSubmit={handleCreatePickList}
      />
    </div>
  );
}