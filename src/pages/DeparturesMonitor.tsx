import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import DeparturesStats from '../components/departures/DeparturesStats';
import DeparturesFilters from '../components/departures/DeparturesFilters';
import DeparturesTable from '../components/departures/DeparturesTable';
import ScheduleDepartureModal from '../components/departures/ScheduleDepartureModal';
import TrackingModal from '../components/departures/TrackingModal';

const mockDepartures = [
  {
    id: 1,
    shipmentId: 'SHP-2024-001',
    destination: 'Los Angeles, CA',
    status: 'Scheduled',
    date: '2024-03-15',
    time: '14:30',
    carrier: 'FastFreight',
    driver: 'John Smith',
    vehicle: 'TR-789-XY',
    items: 12,
    weight: '2,450 kg',
    temperature: '23°C',
    eta: '2024-03-16 16:00',
    trackingStatus: [
      { time: '2024-03-15 10:00', status: 'Documentation Received' },
      { time: '2024-03-15 11:30', status: 'Loading Started' }
    ]
  },
  {
    id: 2,
    shipmentId: 'SHP-2024-002',
    destination: 'Chicago, IL',
    status: 'Loading',
    date: '2024-03-15',
    time: '15:45',
    carrier: 'ExpressLogistics',
    driver: 'Sarah Johnson',
    vehicle: 'TR-456-AB',
    items: 8,
    weight: '1,800 kg',
    temperature: '22°C',
    eta: '2024-03-17 09:00',
    trackingStatus: [
      { time: '2024-03-15 09:00', status: 'Documentation Received' }
    ]
  },
  {
    id: 3,
    shipmentId: 'SHP-2024-003',
    destination: 'Miami, FL',
    status: 'Departed',
    date: '2024-03-14',
    time: '16:15',
    carrier: 'GlobalTransport',
    driver: 'Mike Wilson',
    vehicle: 'TR-123-CD',
    items: 15,
    weight: '3,200 kg',
    temperature: '24°C',
    eta: '2024-03-15 18:00',
    trackingStatus: [
      { time: '2024-03-14 10:00', status: 'Documentation Received' },
      { time: '2024-03-14 11:30', status: 'Loading Started' },
      { time: '2024-03-14 14:00', status: 'Loading Completed' },
      { time: '2024-03-14 16:15', status: 'Departed Facility' }
    ]
  }
];

export default function DeparturesMonitor() {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showTrackingModal, setShowTrackingModal] = useState(false);
  const [selectedDeparture, setSelectedDeparture] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const handleScheduleDeparture = (data: any) => {
    console.log('Scheduling departure:', data);
    setShowScheduleModal(false);
  };

  const handleViewTracking = (departure: any) => {
    setSelectedDeparture(departure);
    setShowTrackingModal(true);
  };

  const handleStatusChange = (departureId: number, newStatus: string) => {
    console.log('Changing status:', departureId, newStatus);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <PageHeader 
        title="Departures Monitor"
        description="Track and manage outbound shipments in real-time"
      />

      <DeparturesStats />

      <div className="bg-white rounded-lg shadow-sm">
        <DeparturesFilters
          selectedDate={selectedDate}
          selectedStatus={selectedStatus}
          onDateChange={setSelectedDate}
          onStatusChange={setSelectedStatus}
          onSchedule={() => setShowScheduleModal(true)}
        />

        <div className="overflow-x-auto">
          <DeparturesTable
            departures={mockDepartures}
            onViewTracking={handleViewTracking}
            onStatusChange={handleStatusChange}
          />
        </div>
      </div>

      <ScheduleDepartureModal
        isOpen={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
        onSubmit={handleScheduleDeparture}
      />

      <TrackingModal
        isOpen={showTrackingModal}
        onClose={() => setShowTrackingModal(false)}
        departure={selectedDeparture}
      />
    </div>
  );
}