export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'active' | 'inactive';
  avatar: string;
  lastActive: string;
  permissions: string[];
  recentActivity: {
    id: number;
    type: string;
    action: string;
    timestamp: string;
  }[];
}