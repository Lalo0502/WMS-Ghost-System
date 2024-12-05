import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import TransloadStats from '../components/transload/TransloadStats';
import TransloadFilters from '../components/transload/TransloadFilters';
import TransloadTable from '../components/transload/TransloadTable';
import CreateTransloadModal from '../components/transload/CreateTransloadModal';
import TransloadDetailsModal from '../components/transload/TransloadDetailsModal';

const mockTransloads = [
  {
    id: 1,
    reference: 'TL-2024-001',
    source: {
      dock: 'Inbound Dock A',
      arrival: '2024-03-15 10:00',
      carrier: 'FastFreight',
      vehicle: 'TR-789-XY'
    },
    destination: {
      dock: 'Outbound Dock C',
      departure: '2024-03-15 14:30',
      carrier: 'ExpressLogistics',
      vehicle: 'TR-456-AB'
    },
    status: 'In Progress',
    items: [
      { id: 1, description: 'Electronics', quantity: 150, weight: '450 kg' },
      { id: 2, description: 'Auto Parts', quantity: 75, weight: '300 kg' }
    ],
    priority: 'High',
    temperature: '23°C',
    humidity: '45%',
    completionRate: 65,
    notes: 'Handle with care - fragile electronics'
  },
  {
    id: 2,
    reference: 'TL-2024-002',
    source: {
      dock: 'Inbound Dock B',
      arrival: '2024-03-15 11:30',
      carrier: 'GlobalTransport',
      vehicle: 'TR-123-CD'
    },
    destination: {
      dock: 'Outbound Dock A',
      departure: '2024-03-15 16:00',
      carrier: 'SpeedFreight',
      vehicle: 'TR-789-EF'
    },
    status: 'Pending',
    items: [
      { id: 3, description: 'Textiles', quantity: 200, weight: '600 kg' }
    ],
    priority: 'Medium',
    temperature: '22°C',
    humidity: '50%',
    completionRate: 0,
    notes: 'Temperature sensitive materials'
  },
  {
    id: 3,
    reference: 'TL-2024-003',
    source: {
      dock: 'Inbound Dock C',
      arrival: '2024-03-14 09:00',
      carrier: 'RapidFreight',
      vehicle: 'TR-456-GH'
    },
    destination: {
      dock: 'Outbound Dock B',
      departure: '2024-03-14 13:45',
      carrier: 'QuickShip',
      vehicle: 'TR-123-IJ'
    },
    status: 'Completed',
    items: [
      { id: 4, description: 'Machinery Parts', quantity: 50, weight: '800 kg' },
      { id: 5, description: 'Tools', quantity: 100, weight: '400 kg' },
      { id: 6, description: 'Hardware', quantity: 300, weight: '600 kg' }
    ],
    priority: 'Low',
    temperature: '24°C',
    humidity: '48%',
    completionRate: 100,
    notes: 'Heavy machinery - use appropriate equipment'
  }
];

export default function Transload() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedTransload, setSelectedTransload] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const handleCreateTransload = (data: any) => {
    console.log('Creating transload:', data);
    setShowCreateModal(false);
  };

  const handleViewDetails = (transload: any) => {
    setSelectedTransload(transload);
    setShowDetailsModal(true);
  };

  const handleStatusChange = (transloadId: number, newStatus: string) => {
    console.log('Changing status:', transloadId, newStatus);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <PageHeader 
        title="Transload Operations"
        description="Manage and monitor cross-docking and transloading operations in real-time"
      />

      <TransloadStats />

      <div className="bg-white rounded-lg shadow-sm">
        <TransloadFilters
          selectedDate={selectedDate}
          selectedStatus={selectedStatus}
          selectedPriority={selectedPriority}
          onDateChange={setSelectedDate}
          onStatusChange={setSelectedStatus}
          onPriorityChange={setSelectedPriority}
          onCreateNew={() => setShowCreateModal(true)}
        />

        <div className="overflow-x-auto">
          <TransloadTable
            transloads={mockTransloads}
            onViewDetails={handleViewDetails}
            onStatusChange={handleStatusChange}
          />
        </div>
      </div>

      <CreateTransloadModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSubmit={handleCreateTransload}
      />

      <TransloadDetailsModal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        transload={selectedTransload}
      />
    </div>
  );
}