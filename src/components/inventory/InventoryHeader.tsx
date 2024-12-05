import React from 'react';
import { Search, Filter, Download, Upload, BarChart2, Plus } from 'lucide-react';

interface InventoryHeaderProps {
  onOpenWizard: () => void;
  onExport: () => void;
  onImport: () => void;
  onOpenAnalytics: () => void;
}

export default function InventoryHeader({
  onOpenWizard,
  onExport,
  onImport,
  onOpenAnalytics
}: InventoryHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by SKU, name, location..."
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <button className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="w-4 h-4 sm:mr-2" />
          <span className="hidden sm:inline">Filters</span>
        </button>
        
        <button 
          onClick={onImport}
          className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <Upload className="w-4 h-4 sm:mr-2" />
          <span className="hidden sm:inline">Import</span>
        </button>
        
        <button 
          onClick={onExport}
          className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <Download className="w-4 h-4 sm:mr-2" />
          <span className="hidden sm:inline">Export</span>
        </button>
        
        <button 
          onClick={onOpenAnalytics}
          className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <BarChart2 className="w-4 h-4 sm:mr-2" />
          <span className="hidden sm:inline">Analytics</span>
        </button>
        
        <button
          onClick={onOpenWizard}
          className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 sm:mr-2" />
          <span className="hidden sm:inline">Add Item</span>
        </button>
      </div>
    </div>
  );
}