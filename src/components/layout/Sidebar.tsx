import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Package, Users, Boxes, Truck, FileText, 
  BarChart3, ChevronDown, ChevronRight,
  Building2, Tags, Box, UserCircle, Warehouse,
  LayoutDashboard, ChevronLeft, Settings,
  Bell, Search, Map
} from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
}

const sidebarItems = [
  { 
    name: 'Dashboard', 
    icon: LayoutDashboard, 
    path: '/dashboard',
    badge: '4'
  },
  { 
    name: 'Inventory', 
    icon: Package, 
    path: '/inventory',
    badge: '12'
  },
  {
    name: 'Floor Map',
    icon: Map,
    path: '/floor-map'
  },
  {
    name: 'Catalogs',
    icon: Boxes,
    path: '/catalogs',
    children: [
      { name: 'Customers', icon: Users, path: '/catalogs/customers' },
      { name: 'Consignees', icon: UserCircle, path: '/catalogs/consignees' },
      { name: 'Part Number', icon: Tags, path: '/catalogs/part-number' },
      { name: 'Carriers', icon: Truck, path: '/catalogs/carriers' },
      { name: 'Bundle Types', icon: Box, path: '/catalogs/bundle-types' },
      { name: 'Warehouse', icon: Building2, path: '/catalogs/warehouse' },
      { name: 'Users', icon: Users, path: '/catalogs/users' },
    ],
  },
  { 
    name: 'Pick List Monitor', 
    icon: FileText, 
    path: '/pick-list',
    badge: '3'
  },
  { 
    name: 'Departures Monitor', 
    icon: Truck, 
    path: '/departures',
    badge: '5'
  },
  { 
    name: 'Reports', 
    icon: BarChart3, 
    path: '/reports' 
  },
  { 
    name: 'Transload', 
    icon: Warehouse, 
    path: '/transload',
    badge: '2'
  },
];

export default function Sidebar({ onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(['']);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleExpand = (path: string) => {
    setExpandedItems(prev =>
      prev.includes(path)
        ? prev.filter(p => p !== path)
        : [...prev, path]
    );
  };

  const filteredItems = sidebarItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.children?.some(child => 
      child.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const renderSidebarItem = (item: any, level = 0) => {
    const Icon = item.icon;
    const isActive = location.pathname === item.path || 
                    (item.children && location.pathname.startsWith(item.path));
    const isExpanded = expandedItems.includes(item.path);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.path}>
        <button
          onClick={() => {
            if (hasChildren) {
              toggleExpand(item.path);
            } else {
              navigate(item.path);
              onClose();
            }
          }}
          className={`w-full flex items-center px-4 py-2.5 text-sm transition-all duration-150
            ${isActive 
              ? 'bg-blue-50 text-blue-600 font-medium' 
              : 'text-gray-600 hover:bg-gray-50'
            }
            ${level > 0 ? 'pl-12' : ''}
            ${isCollapsed ? 'justify-center' : ''}`}
          title={isCollapsed ? item.name : undefined}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Icon className={`w-5 h-5 ${!isCollapsed ? 'mr-3' : ''}`} />
              {!isCollapsed && (
                <span className="flex-1">{item.name}</span>
              )}
            </div>
            {!isCollapsed && (
              <div className="flex items-center">
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-600 mr-2">
                    {item.badge}
                  </span>
                )}
                {hasChildren && (
                  <span className="ml-auto">
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </span>
                )}
              </div>
            )}
          </div>
        </button>
        {!isCollapsed && hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children?.map((child: any) => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`flex flex-col h-full bg-white border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && (
          <div className="flex items-center">
            <Warehouse className="w-6 h-6 text-blue-600" />
            <h1 className="ml-2 text-xl font-bold text-gray-800">WMS Pro</h1>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-md hover:bg-gray-100"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft className={`h-5 w-5 text-gray-500 transform transition-transform ${
            isCollapsed ? 'rotate-180' : ''
          }`} />
        </button>
      </div>

      {/* Search */}
      {!isCollapsed && (
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-1">
        {filteredItems.map(item => renderSidebarItem(item))}
      </nav>

      {/* Footer */}
      <div className="mt-auto border-t border-gray-200">
        {isCollapsed ? (
          <div className="p-2 flex flex-col items-center space-y-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="p-4 space-y-2">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <UserCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="flex-1 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <Bell className="w-5 h-5 mx-auto" />
              </button>
              <button className="flex-1 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <Settings className="w-5 h-5 mx-auto" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}