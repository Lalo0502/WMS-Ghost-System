import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import ReportsStats from '../components/reports/ReportsStats';
import ReportsList from '../components/reports/ReportsList';
import ReportViewer from '../components/reports/ReportViewer';
import { BarChart3, PieChart, TrendingUp, Calendar } from 'lucide-react';

const reportCategories = [
  {
    id: 'inventory',
    name: 'Inventory Reports',
    description: 'Stock levels, inventory turnover, and aging analysis',
    icon: BarChart3,
    reports: [
      { id: 'stock-levels', name: 'Current Stock Levels', type: 'bar' },
      { id: 'low-stock', name: 'Low Stock Alert', type: 'table' },
      { id: 'inventory-aging', name: 'Inventory Aging', type: 'line' },
      { id: 'stock-turnover', name: 'Stock Turnover Rate', type: 'line' }
    ]
  },
  {
    id: 'operations',
    name: 'Operations Reports',
    description: 'Picking efficiency, shipping performance, and utilization',
    icon: PieChart,
    reports: [
      { id: 'picking-performance', name: 'Picking Performance', type: 'bar' },
      { id: 'shipping-accuracy', name: 'Shipping Accuracy', type: 'pie' },
      { id: 'space-utilization', name: 'Space Utilization', type: 'bar' },
      { id: 'labor-efficiency', name: 'Labor Efficiency', type: 'line' }
    ]
  },
  {
    id: 'analytics',
    name: 'Analytics & Trends',
    description: 'Historical data analysis and forecasting',
    icon: TrendingUp,
    reports: [
      { id: 'monthly-trends', name: 'Monthly Trends', type: 'line' },
      { id: 'seasonal-analysis', name: 'Seasonal Analysis', type: 'bar' },
      { id: 'year-over-year', name: 'Year-over-Year', type: 'line' },
      { id: 'forecasting', name: 'Demand Forecasting', type: 'line' }
    ]
  }
];

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState(null);
  const [dateRange, setDateRange] = useState('last-30');
  const [showViewer, setShowViewer] = useState(false);

  const handleReportSelect = (report: any) => {
    setSelectedReport(report);
    setShowViewer(true);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <PageHeader 
        title="Reports & Analytics"
        description="Generate and analyze warehouse operation reports with interactive visualizations"
      />

      <ReportsStats />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-4 rounded-lg shadow-sm space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="w-full sm:w-auto rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="today">Today</option>
            <option value="last-7">Last 7 Days</option>
            <option value="last-30">Last 30 Days</option>
            <option value="last-90">Last 90 Days</option>
            <option value="custom">Custom Range</option>
          </select>

          {dateRange === 'custom' && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-auto">
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full sm:w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <span className="hidden sm:block">to</span>
              <input
                type="date"
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}
        </div>

        <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Generate Reports
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ReportsList
            categories={reportCategories}
            onSelectReport={handleReportSelect}
          />
        </div>
        <div className="lg:col-span-1">
          <ReportViewer
            isOpen={showViewer}
            report={selectedReport}
            onClose={() => setShowViewer(false)}
          />
        </div>
      </div>
    </div>
  );
}