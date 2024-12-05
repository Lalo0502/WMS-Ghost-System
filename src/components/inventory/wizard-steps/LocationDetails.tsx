import React from 'react';

interface LocationDetailsProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function LocationDetails({ formData, setFormData }: LocationDetailsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Warehouse</label>
          <select
            name="warehouse"
            value={formData.warehouse}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select warehouse</option>
            <option value="main">Main Warehouse</option>
            <option value="north">North Facility</option>
            <option value="south">South Facility</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Zone</label>
          <input
            type="text"
            name="zone"
            value={formData.zone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., A, B, C"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Aisle</label>
          <input
            type="text"
            name="aisle"
            value={formData.aisle}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., 1, 2, 3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Rack</label>
          <input
            type="text"
            name="rack"
            value={formData.rack}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., R01, R02"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Shelf</label>
          <input
            type="text"
            name="shelf"
            value={formData.shelf}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., S1, S2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bin</label>
          <input
            type="text"
            name="bin"
            value={formData.bin}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., B001, B002"
          />
        </div>
      </div>
    </div>
  );
}