import React from 'react';
import { Download, Eye } from 'lucide-react';

interface ReportsListProps {
  categories: any[];
  onSelectReport: (report: any) => void;
}

export default function ReportsList({ categories, onSelectReport }: ReportsListProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <div key={category.id} className="bg-white rounded-lg shadow-sm">
            <div className="p-4 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="divide-y divide-gray-200">
                  {category.reports.map((report: any) => (
                    <div key={report.id} className="py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900">{report.name}</h4>
                          <div className="mt-1 flex flex-wrap items-center gap-2">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              report.type === 'bar' ? 'bg-blue-100 text-blue-800' :
                              report.type === 'line' ? 'bg-green-100 text-green-800' :
                              report.type === 'pie' ? 'bg-purple-100 text-purple-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {report.type}
                            </span>
                            <span className="text-xs text-gray-500">Updated 2 hours ago</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onSelectReport(report)}
                            className="p-2 text-gray-400 hover:text-gray-500"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-500">
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}