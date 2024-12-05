import React from 'react';
import { X, CheckCircle2, Clock } from 'lucide-react';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  departure: any;
}

export default function TrackingModal({ isOpen, onClose, departure }: TrackingModalProps) {
  if (!isOpen || !departure) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Shipment Tracking</h3>
            <p className="mt-1 text-sm text-gray-500">{departure.shipmentId}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Shipment Details */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-gray-900 mb-4">Shipment Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Destination</p>
                <p className="text-sm font-medium text-gray-900">{departure.destination}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Carrier</p>
                <p className="text-sm font-medium text-gray-900">{departure.carrier}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Driver</p>
                <p className="text-sm font-medium text-gray-900">{departure.driver}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicle</p>
                <p className="text-sm font-medium text-gray-900">{departure.vehicle}</p>
              </div>
            </div>
          </div>

          {/* Tracking Timeline */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Tracking Timeline</h4>
            <div className="flow-root">
              <ul className="-mb-8">
                {departure.trackingStatus.map((status: any, index: number) => (
                  <li key={index}>
                    <div className="relative pb-8">
                      {index !== departure.trackingStatus.length - 1 && (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      )}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                            index === departure.trackingStatus.length - 1
                              ? 'bg-green-500'
                              : 'bg-gray-400'
                          }`}>
                            {index === departure.trackingStatus.length - 1 ? (
                              <CheckCircle2 className="h-5 w-5 text-white" />
                            ) : (
                              <Clock className="h-5 w-5 text-white" />
                            )}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5">
                          <p className="text-sm font-medium text-gray-900">{status.status}</p>
                          <p className="mt-1 text-sm text-gray-500">{status.time}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}