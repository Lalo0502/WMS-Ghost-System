export interface SidebarItem {
  name: string;
  icon: string;
  path: string;
  children?: SidebarItem[];
}

export interface PageHeader {
  title: string;
  description: string;
}