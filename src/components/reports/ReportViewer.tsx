import React from 'react';
import { X, Download, Share2, Printer } from 'lucide-react';

interface ReportViewerProps {
  isOpen: boolean;
  report: any;
  onClose: () => void;
}

export default function ReportViewer({ isOpen, report, onClose }: ReportViewerProps) {
  if (!isOpen || !report) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm h-full">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">{report.name}</h3>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-500 hidden sm:block">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-500 hidden sm:block">
            <Printer className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-500">
            <Download className="w-5 h-5" />
          </button>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
          [Chart Visualization]
        </div>

        <div className="mt-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <h4 className="text-sm font-medium text-gray-900">Summary</h4>
            <span className="text-sm text-gray-500">Last updated: 2 hours ago</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            This report shows the analysis of warehouse operations over the selected time period.
            Key metrics and trends are highlighted for better decision making.
          </p>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Key Metrics</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((metric) => (
              <div key={metric} className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Metric {metric}</p>
                <p className="text-lg font-medium text-gray-900">Value {metric}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}