import React from 'react';
import { X, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AnalyticsModal({ isOpen, onClose }: AnalyticsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Inventory Analytics</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-medium text-gray-900">Stock Turnover Rate</h4>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  12%
                </span>
              </div>
              <div className="mt-4 h-48 bg-gray-50 rounded flex items-center justify-center">
                [Stock Turnover Chart]
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-medium text-gray-900">Inventory Value</h4>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                  3%
                </span>
              </div>
              <div className="mt-4 h-48 bg-gray-50 rounded flex items-center justify-center">
                [Inventory Value Chart]
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-base font-medium text-gray-900 mb-4">Top Moving Items</h4>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Product {item}</p>
                        <p className="text-xs text-gray-500">SKU-{1000 + item}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {Math.floor(Math.random() * 1000)} units
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}