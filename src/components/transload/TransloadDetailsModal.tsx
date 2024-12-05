import React from 'react';
import { X, Package, ThermometerSun, Droplets } from 'lucide-react';

interface TransloadDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  transload: any;
}

export default function TransloadDetailsModal({ isOpen, onClose, transload }: TransloadDetailsModalProps) {
  if (!isOpen || !transload) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Transload Details</h3>
            <p className="mt-1 text-sm text-gray-500">{transload.reference}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Source and Destination */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-4">Source</h4>
              <dl className="space-y-2">
                <div>
                  <dt className="text-sm text-gray-500">Dock</dt>
                  <dd className="text-sm font-medium text-gray-900">{transload.source.dock}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Arrival</dt>
                  <dd className="text-sm font-medium text-gray-900">{transload.source.arrival}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Carrier</dt>
                  <dd className="text-sm font-medium text-gray-900">{transload.source.carrier}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Vehicle</dt>
                  <dd className="text-sm font-medium text-gray-900">{transload.source.vehicle}</dd>
                </div>
              </dl>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-4">Destination</h4>
              <dl className="space-y-2">
                <div>
                  <dt className="text-sm text-gray-500">Dock</dt>
                  <dd className="text-sm font-medium text-gray-900">{transload.destination.dock}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Departure</dt>
                  <dd className="text-sm font-medium text-gray-900">{transload.destination.departure}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Carrier</dt>
                  <dd className="text-sm font-medium text-gray-900">{transload.destination.carrier}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Vehicle</dt>
                  <dd className="text-sm font-medium text-gray-900">{transload.destination.vehicle}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Environmental Conditions */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Environmental Conditions</h4>
            <div className="flex space-x-6">
              <div className="flex items-center">
                <ThermometerSun className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-900">{transload.temperature}</span>
              </div>
              <div className="flex items-center">
                <Droplets className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-900">{transload.humidity}</span>
              </div>
            </div>
          </div>

          {/* Items */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Items</h4>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Weight</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transload.items.map((item: any, index: number) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center">
                          <Package className="h-5 w-5 text-gray-400 mr-2" />
                          {item.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notes */}
          {transload.notes && (
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Notes</h4>
              <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">{transload.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}