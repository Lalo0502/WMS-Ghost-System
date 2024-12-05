import React from 'react';
import { Check } from 'lucide-react';

interface ReviewProps {
  formData: any;
}

export default function Review({ formData }: ReviewProps) {
  const sections = [
    {
      title: 'Basic Details',
      fields: [
        { label: 'SKU', value: formData.sku },
        { label: 'Name', value: formData.name },
        { label: 'Description', value: formData.description },
        { label: 'Category', value: formData.category },
        { label: 'Supplier', value: formData.supplier }
      ]
    },
    {
      title: 'Stock Details',
      fields: [
        { label: 'Initial Quantity', value: formData.quantity },
        { label: 'Unit of Measure', value: formData.unit },
        { label: 'Minimum Stock', value: formData.minStock },
        { label: 'Maximum Stock', value: formData.maxStock },
        { label: 'Reorder Point', value: formData.reorderPoint }
      ]
    },
    {
      title: 'Location Details',
      fields: [
        { label: 'Warehouse', value: formData.warehouse },
        { label: 'Zone', value: formData.zone },
        { label: 'Aisle', value: formData.aisle },
        { label: 'Rack', value: formData.rack },
        { label: 'Shelf', value: formData.shelf },
        { label: 'Bin', value: formData.bin }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {sections.map((section, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg font-medium leading-6 text-gray-900">{section.title}</h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${
                  fieldIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}>
                  <dt className="text-sm font-medium text-gray-500">{field.label}</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {field.value || '-'}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ))}

      <div className="rounded-lg bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <Check className="h-5 w-5 text-green-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">Ready to Save</h3>
            <div className="mt-2 text-sm text-green-700">
              <p>Please review all the information above before saving the new inventory item.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}