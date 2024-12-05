import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import UsersList from '../../components/users/UsersList';
import UserStats from '../../components/users/UserStats';
import UserFilters from '../../components/users/UserFilters';
import CreateUserModal from '../../components/users/CreateUserModal';
import UserDetailsModal from '../../components/users/UserDetailsModal';
import UserActivityModal from '../../components/users/UserActivityModal';
import { User } from '../../types/user';

const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Warehouse Manager',
    department: 'Operations',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
    lastActive: '2024-03-15T10:30:00',
    permissions: ['inventory.view', 'inventory.edit', 'users.manage'],
    recentActivity: [
      { id: 1, type: 'inventory', action: 'Updated stock levels', timestamp: '2024-03-15T10:25:00' },
      { id: 2, type: 'shipment', action: 'Approved shipment #1234', timestamp: '2024-03-15T09:15:00' }
    ]
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    role: 'Inventory Specialist',
    department: 'Inventory',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    lastActive: '2024-03-15T11:00:00',
    permissions: ['inventory.view', 'inventory.edit'],
    recentActivity: [
      { id: 3, type: 'inventory', action: 'Conducted stock audit', timestamp: '2024-03-15T10:45:00' }
    ]
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael.c@example.com',
    role: 'Shipping Coordinator',
    department: 'Logistics',
    status: 'inactive',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
    lastActive: '2024-03-14T15:45:00',
    permissions: ['shipments.view', 'shipments.edit'],
    recentActivity: [
      { id: 4, type: 'shipment', action: 'Created new shipment #1235', timestamp: '2024-03-14T15:30:00' }
    ]
  }
];

export default function Users() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [filters, setFilters] = useState({
    search: '',
    department: 'all',
    role: 'all',
    status: 'all'
  });

  const handleCreateUser = (userData: Partial<User>) => {
    console.log('Creating new user:', userData);
    setShowCreateModal(false);
  };

  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
    setShowDetailsModal(true);
  };

  const handleViewActivity = (user: User) => {
    setSelectedUser(user);
    setShowActivityModal(true);
  };

  const handleUpdateStatus = (userId: number, newStatus: string) => {
    console.log('Updating user status:', userId, newStatus);
  };

  const handleUpdateRole = (userId: number, newRole: string) => {
    console.log('Updating user role:', userId, newRole);
  };

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                         user.email.toLowerCase().includes(filters.search.toLowerCase());
    const matchesDepartment = filters.department === 'all' || user.department.toLowerCase() === filters.department;
    const matchesRole = filters.role === 'all' || user.role.toLowerCase() === filters.role;
    const matchesStatus = filters.status === 'all' || user.status === filters.status;

    return matchesSearch && matchesDepartment && matchesRole && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <PageHeader 
        title="User Management"
        description="Manage system users, roles, and permissions"
      />

      <UserStats users={mockUsers} />

      <div className="bg-white rounded-lg shadow-sm">
        <UserFilters
          filters={filters}
          onFilterChange={setFilters}
          onCreateNew={() => setShowCreateModal(true)}
        />

        <UsersList
          users={filteredUsers}
          onViewDetails={handleViewDetails}
          onViewActivity={handleViewActivity}
          onUpdateStatus={handleUpdateStatus}
          onUpdateRole={handleUpdateRole}
        />
      </div>

      <CreateUserModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSubmit={handleCreateUser}
      />

      <UserDetailsModal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        user={selectedUser}
      />

      <UserActivityModal
        isOpen={showActivityModal}
        onClose={() => setShowActivityModal(false)}
        user={selectedUser}
      />
    </div>
  );
}