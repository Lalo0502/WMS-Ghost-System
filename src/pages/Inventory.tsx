import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import InventoryHeader from '../components/inventory/InventoryHeader';
import InventoryStats from '../components/inventory/InventoryStats';
import InventoryTable from '../components/inventory/InventoryTable';
import InventoryWizard from '../components/inventory/InventoryWizard';
import AnalyticsModal from '../components/inventory/AnalyticsModal';

const mockInventoryItems = [
  {
    id: 1,
    sku: 'WH-1001',
    name: 'Steel Pipes',
    category: 'Construction',
    quantity: 250,
    minStock: 300,
    location: 'A-101',
    lastUpdated: '2024-03-15',
    status: 'Low Stock' as const
  },
  {
    id: 2,
    sku: 'WH-1002',
    name: 'Copper Wire',
    category: 'Electrical',
    quantity: 1000,
    minStock: 500,
    location: 'B-202',
    lastUpdated: '2024-03-14',
    status: 'In Stock' as const
  },
  {
    id: 3,
    sku: 'WH-1003',
    name: 'Lumber 2x4',
    category: 'Wood',
    quantity: 0,
    minStock: 100,
    location: 'C-303',
    lastUpdated: '2024-03-13',
    status: 'Out of Stock' as const
  },
];

export default function Inventory() {
  const [showWizard, setShowWizard] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const handleExport = () => {
    console.log('Exporting inventory...');
  };

  const handleImport = () => {
    console.log('Importing inventory...');
  };

  const handleEdit = (item: any) => {
    console.log('Editing item:', item);
  };

  const handleDelete = (id: number) => {
    console.log('Deleting item:', id);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <PageHeader 
        title="Inventory Management"
        description="Track and manage your warehouse inventory levels in real-time"
      />

      <div className="bg-white rounded-lg shadow-sm p-4">
        <InventoryHeader
          onOpenWizard={() => setShowWizard(true)}
          onExport={handleExport}
          onImport={handleImport}
          onOpenAnalytics={() => setShowAnalytics(true)}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <InventoryStats />

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <InventoryTable
              items={mockInventoryItems}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>

      <InventoryWizard
        isOpen={showWizard}
        onClose={() => setShowWizard(false)}
      />

      <AnalyticsModal
        isOpen={showAnalytics}
        onClose={() => setShowAnalytics(false)}
      />
    </div>
  );
}