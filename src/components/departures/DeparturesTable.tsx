import React from 'react';
import { Truck, MapPin, ThermometerSun, Package, Clock, Eye, MoreVertical } from 'lucide-react';

interface DeparturesTableProps {
  departures: any[];
  onViewTracking: (departure: any) => void;
  onStatusChange: (departureId: number, status: string) => void;
}

export default function DeparturesTable({
  departures,
  onViewTracking,
  onStatusChange
}: DeparturesTableProps) {
  // Mobile card view for each departure
  const MobileCard = ({ departure }: { departure: any }) => (
    <div className="bg-white p-4 border-b border-gray-200 last:border-b-0">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{departure.shipmentId}</h3>
          <p className="text-sm text-gray-500">{departure.date} {departure.time}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onViewTracking(departure)}
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
        <div className="flex items-center text-sm">
          <MapPin className="w-4 h-4 text-gray-400 mr-2" />
          <span className="text-gray-900">{departure.destination}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Status</span>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            departure.status === 'Departed' ? 'bg-green-100 text-green-800' :
            departure.status === 'Loading' ? 'bg-yellow-100 text-yellow-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {departure.status}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Carrier</span>
          <div className="text-sm text-gray-900">{departure.carrier}</div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Driver</span>
          <div className="text-sm text-gray-900">{departure.driver}</div>
        </div>

        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center">
            <Package className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-sm text-gray-500">{departure.items} items</span>
          </div>
          <div className="flex items-center">
            <ThermometerSun className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-sm text-gray-500">{departure.temperature}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">ETA</span>
          <div className="flex items-center text-sm text-gray-900">
            <Clock className="w-4 h-4 text-gray-400 mr-1" />
            {departure.eta}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Mobile view */}
      <div className="sm:hidden">
        {departures.map((departure) => (
          <MobileCard key={departure.id} departure={departure} />
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden sm:block">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shipment Info</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carrier Details</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cargo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ETA</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {departures.map((departure) => (
              <tr key={departure.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-gray-400" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{departure.shipmentId}</div>
                      <div className="text-sm text-gray-500">
                        {departure.date} {departure.time}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-900">{departure.destination}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    departure.status === 'Departed' ? 'bg-green-100 text-green-800' :
                    departure.status === 'Loading' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {departure.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{departure.carrier}</div>
                  <div className="text-sm text-gray-500">
                    {departure.driver} • {departure.vehicle}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Package className="h-4 w-4 text-gray-400" />
                      <span className="ml-1 text-sm text-gray-500">{departure.items}</span>
                    </div>
                    <div className="flex items-center">
                      <ThermometerSun className="h-4 w-4 text-gray-400" />
                      <span className="ml-1 text-sm text-gray-500">{departure.temperature}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-900">{departure.eta}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => onViewTracking(departure)}
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