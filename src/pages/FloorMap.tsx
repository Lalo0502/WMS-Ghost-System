import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { Search, Filter, Eye, AlertTriangle, Package, Truck, ArrowRight } from 'lucide-react';

// Tipos para las zonas del almacén
type ZoneType = 'storage' | 'picking' | 'shipping' | 'receiving' | 'hazmat' | 'empty';
type ZoneStatus = 'available' | 'occupied' | 'reserved' | 'maintenance';

interface Zone {
  id: string;
  type: ZoneType;
  name: string;
  status: ZoneStatus;
  capacity: number;
  occupied: number;
  temperature?: number;
  humidity?: number;
  lastActivity?: string;
  alerts?: string[];
}

// Datos simulados de las zonas
const mockZones: Zone[] = [
  {
    id: 'A1',
    type: 'storage',
    name: 'Storage Zone A1',
    status: 'occupied',
    capacity: 100,
    occupied: 85,
    temperature: 22,
    humidity: 45,
    lastActivity: '5 minutes ago',
    alerts: ['Low space available']
  },
  {
    id: 'B2',
    type: 'picking',
    name: 'Picking Zone B2',
    status: 'available',
    capacity: 50,
    occupied: 20,
    temperature: 21,
    humidity: 40,
    lastActivity: '2 minutes ago'
  },
  {
    id: 'C3',
    type: 'shipping',
    name: 'Shipping Dock C3',
    status: 'reserved',
    capacity: 30,
    occupied: 15,
    lastActivity: '10 minutes ago'
  },
  {
    id: 'D4',
    type: 'receiving',
    name: 'Receiving Dock D4',
    status: 'maintenance',
    capacity: 40,
    occupied: 0,
    alerts: ['Maintenance in progress']
  },
  {
    id: 'E5',
    type: 'hazmat',
    name: 'Hazmat Storage E5',
    status: 'occupied',
    capacity: 20,
    occupied: 18,
    temperature: 18,
    humidity: 35,
    alerts: ['Near capacity']
  }
];

export default function FloorMap() {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<ZoneType | 'all'>('all');

  const filteredZones = mockZones.filter(zone => {
    const matchesSearch = zone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         zone.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || zone.type === filterType;
    return matchesSearch && matchesType;
  });

  const getZoneColor = (zone: Zone) => {
    if (zone.status === 'maintenance') return 'bg-gray-200';
    
    switch (zone.type) {
      case 'storage':
        return 'bg-blue-100 hover:bg-blue-200';
      case 'picking':
        return 'bg-green-100 hover:bg-green-200';
      case 'shipping':
        return 'bg-purple-100 hover:bg-purple-200';
      case 'receiving':
        return 'bg-yellow-100 hover:bg-yellow-200';
      case 'hazmat':
        return 'bg-red-100 hover:bg-red-200';
      default:
        return 'bg-gray-100 hover:bg-gray-200';
    }
  };

  const getStatusColor = (status: ZoneStatus) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'occupied':
        return 'bg-blue-100 text-blue-800';
      case 'reserved':
        return 'bg-yellow-100 text-yellow-800';
      case 'maintenance':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Warehouse Floor Map"
        description="Interactive visualization of warehouse zones and real-time status"
      />

      {/* Controls */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search zones..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as ZoneType | 'all')}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Zones</option>
              <option value="storage">Storage</option>
              <option value="picking">Picking</option>
              <option value="shipping">Shipping</option>
              <option value="receiving">Receiving</option>
              <option value="hazmat">Hazmat</option>
            </select>
            <button className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Filter className="w-5 h-5 mr-2" />
              <span>More Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floor Map Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Zones Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredZones.map((zone) => (
            <div
              key={zone.id}
              className={`${getZoneColor(zone)} p-4 rounded-lg cursor-pointer transition-all duration-200`}
              onClick={() => setSelectedZone(zone)}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{zone.id}</h3>
                  <p className="text-sm text-gray-600">{zone.name}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(zone.status)}`}>
                  {zone.status}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Capacity</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(zone.occupied / zone.capacity) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-900">{Math.round((zone.occupied / zone.capacity) * 100)}%</span>
                  </div>
                </div>

                {zone.temperature && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Temperature</span>
                    <span className="text-sm text-gray-900">{zone.temperature}°C</span>
                  </div>
                )}

                {zone.alerts && zone.alerts.length > 0 && (
                  <div className="flex items-center text-red-600 text-sm mt-2">
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    <span>{zone.alerts[0]}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Zone Details Panel */}
        <div className="lg:col-span-1">
          {selectedZone ? (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">{selectedZone.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Zone ID: {selectedZone.id}</p>
                </div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(selectedZone.status)}`}>
                  {selectedZone.status}
                </span>
              </div>

              <div className="space-y-6">
                {/* Capacity Information */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Capacity Information</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Total Capacity</span>
                      <span className="text-sm font-medium text-gray-900">{selectedZone.capacity} units</span>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600">Occupied Space</span>
                      <span className="text-sm font-medium text-gray-900">{selectedZone.occupied} units</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${(selectedZone.occupied / selectedZone.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Environmental Conditions */}
                {(selectedZone.temperature || selectedZone.humidity) && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Environmental Conditions</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedZone.temperature && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">Temperature</div>
                          <div className="text-lg font-medium text-gray-900">{selectedZone.temperature}°C</div>
                        </div>
                      )}
                      {selectedZone.humidity && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">Humidity</div>
                          <div className="text-lg font-medium text-gray-900">{selectedZone.humidity}%</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Current Activity */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Current Activity</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center">
                        <Package className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">Active Orders</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">12</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center">
                        <Truck className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">Pending Shipments</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">5</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Assign Tasks
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Zone Selected</h3>
              <p className="text-sm text-gray-500">Select a zone from the map to view its details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}