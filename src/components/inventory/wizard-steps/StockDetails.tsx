import React from 'react';

interface StockDetailsProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function StockDetails({ formData, setFormData }: StockDetailsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Initial Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Unit of Measure</label>
          <select
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select unit</option>
            <option value="pieces">Pieces</option>
            <option value="boxes">Boxes</option>
            <option value="pallets">Pallets</option>
            <option value="kg">Kilograms</option>
            <option value="liters">Liters</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum Stock Level</label>
          <input
            type="number"
            name="minStock"
            value={formData.minStock}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <p className="mt-1 text-sm text-gray-500">Alert will be triggered below this level</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Maximum Stock Level</label>
          <input
            type="number"
            name="maxStock"
            value={formData.maxStock}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Reorder Point</label>
          <input
            type="number"
            name="reorderPoint"
            value={formData.reorderPoint}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <p className="mt-1 text-sm text-gray-500">Level at which to reorder stock</p>
        </div>
      </div>
    </div>
  );
}