import React from 'react';
import { Printer } from 'lucide-react';

interface StepFourProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function StepFour({ formData, setFormData }: StepFourProps) {
  const handleGenerateLabel = () => {
    setFormData({
      ...formData,
      labelData: {
        ...formData.labelData,
        generated: true
      }
    });
  };

  return (
    <div>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Label Preview</h3>
          <div className="bg-white p-6 rounded border border-gray-300 mb-6">
            {/* Mock Label Content */}
            <div className="space-y-2">
              <p className="text-sm font-bold">Warehouse: {formData.warehouse}</p>
              <p className="text-sm">Client: {formData.client}</p>
              <p className="text-sm">Part Number: {formData.productDetails.clientPart}</p>
              <p className="text-sm">Quantity: {formData.productDetails.quantity}</p>
              <p className="text-sm">Location: {formData.productDetails.section} - {formData.productDetails.rack}</p>
              {/* Add Barcode Placeholder */}
              <div className="h-16 bg-gray-200 mx-auto w-48 mt-4"></div>
            </div>
          </div>
          
          <button
            onClick={handleGenerateLabel}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Printer className="h-5 w-5 mr-2" />
            Print Label
          </button>
        </div>
      </div>
    </div>
  );
}