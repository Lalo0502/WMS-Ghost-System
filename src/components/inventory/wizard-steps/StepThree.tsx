import React, { useCallback } from 'react';
import { Upload, X } from 'lucide-react';

interface StepThreeProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function StepThree({ formData, setFormData }: StepThreeProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      setFormData({
        ...formData,
        documents: [...formData.documents, ...files]
      });
    },
    [formData, setFormData]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData({
        ...formData,
        documents: [...formData.documents, ...files]
      });
    }
  };

  const removeFile = (index: number) => {
    setFormData({
      ...formData,
      documents: formData.documents.filter((_: any, i: number) => i !== index)
    });
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop files here, or click to select files
        </p>
        <input
          type="file"
          multiple
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Select Files
        </label>
      </div>

      {formData.documents.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900">Uploaded Files</h4>
          <ul className="mt-3 divide-y divide-gray-200">
            {formData.documents.map((file: File, index: number) => (
              <li key={index} className="py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm text-gray-900">{file.name}</span>
                  <span className="ml-2 text-sm text-gray-500">
                    ({Math.round(file.size / 1024)} KB)
                  </span>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}