import React, { useState } from 'react';
import { Package, ArrowRight, ArrowLeft, Save } from 'lucide-react';
import BasicDetails from './wizard-steps/BasicDetails';
import StockDetails from './wizard-steps/StockDetails';
import LocationDetails from './wizard-steps/LocationDetails';
import Review from './wizard-steps/Review';

interface InventoryWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

type WizardStep = {
  id: number;
  title: string;
  description: string;
};

const steps: WizardStep[] = [
  {
    id: 1,
    title: 'Basic Details',
    description: 'Enter basic item information'
  },
  {
    id: 2,
    title: 'Stock Details',
    description: 'Set quantity and stock levels'
  },
  {
    id: 3,
    title: 'Location',
    description: 'Specify storage location'
  },
  {
    id: 4,
    title: 'Review',
    description: 'Review and confirm details'
  }
];

export default function InventoryWizard({ isOpen, onClose }: InventoryWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Details
    sku: '',
    name: '',
    description: '',
    category: '',
    supplier: '',
    // Stock Details
    quantity: 0,
    unit: '',
    minStock: 0,
    maxStock: 0,
    reorderPoint: 0,
    // Location Details
    warehouse: '',
    zone: '',
    aisle: '',
    rack: '',
    shelf: '',
    bin: ''
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    onClose();
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <BasicDetails formData={formData} setFormData={setFormData} />;
      case 2:
        return <StockDetails formData={formData} setFormData={setFormData} />;
      case 3:
        return <LocationDetails formData={formData} setFormData={setFormData} />;
      case 4:
        return <Review formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 px-4 sm:px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Package className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Add New Item</h2>
                <p className="text-sm text-gray-500 mt-1 hidden sm:block">Complete all steps to add a new inventory item</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <span className="sr-only">Close</span>
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200 overflow-x-auto">
          <div className="flex min-w-max sm:min-w-0">
            {steps.map((step) => (
              <div key={step.id} className="flex-1 px-2 first:pl-0 last:pr-0">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 
                    ${currentStep >= step.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 text-gray-500'}`}>
                    {step.id}
                  </div>
                  <div className="hidden sm:block ml-3">
                    <p className={`text-sm font-medium ${currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'}`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="p-4 sm:p-6">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 sm:px-6 py-4">
          <div className="flex justify-between space-x-3">
            <button
              onClick={handleBack}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Back</span>
            </button>
            
            {currentStep === steps.length ? (
              <button
                onClick={handleSubmit}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <Save className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Save Item</span>
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <span className="hidden sm:inline">Next</span>
                <ArrowRight className="w-4 h-4 sm:ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}