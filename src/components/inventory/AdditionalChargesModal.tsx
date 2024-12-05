import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

interface Charge {
  id: number;
  for: string;
  responsible: string;
  charge: number;
  quantity: number;
}

interface AdditionalChargesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdditionalChargesModal({ isOpen, onClose }: AdditionalChargesModalProps) {
  const [charges, setCharges] = useState<Charge[]>([]);
  const [currentCharge, setCurrentCharge] = useState<Charge>({
    id: Date.now(),
    for: '',
    responsible: '',
    charge: 0,
    quantity: 1
  });

  const handleAddCharge = () => {
    setCharges([...charges, currentCharge]);
    setCurrentCharge({
      id: Date.now(),
      for: '',
      responsible: '',
      charge: 0,
      quantity: 1
    });
  };

  const handleRemoveCharge = (id: number) => {
    setCharges(charges.filter(charge => charge.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Additional Charges</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">For</label>
              <input
                type="text"
                value={currentCharge.for}
                onChange={(e) => setCurrentCharge({ ...currentCharge, for: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Responsible</label>
              <input
                type="text"
                value={currentCharge.responsible}
                onChange={(e) => setCurrentCharge({ ...currentCharge, responsible: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Charge</label>
              <input
                type="number"
                value={currentCharge.charge}
                onChange={(e) => setCurrentCharge({ ...currentCharge, charge: Number(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                value={currentCharge.quantity}
                onChange={(e) => setCurrentCharge({ ...currentCharge, quantity: Number(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            onClick={handleAddCharge}
            className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Charge
          </button>

          {charges.length > 0 && (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">For</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Responsible</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Charge</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {charges.map((charge) => (
                  <tr key={charge.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{charge.for}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{charge.responsible}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${charge.charge}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{charge.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${charge.charge * charge.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleRemoveCharge(charge.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}