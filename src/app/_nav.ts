interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'   
  },
  {
    name: 'Invoices',
    url: '/invoices',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'New Invoice',
        url: '/invoices/new',
        icon: 'icon-puzzle'
      },
      {
        name: 'New Quote',
        url: '/invoices/new',
        icon: 'icon-puzzle'
      },
      {
        name: 'Recurring Plans',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add Recurring Plans',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Settings',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      }      
    ]
  },
  {
    name: 'Bills',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'New Bill',
        url: '/bills/add',
        icon: 'icon-puzzle'
      },
      {
        name: 'Purchase Orders',
        url: '/purchase-orders',
        icon: 'icon-puzzle'
      },
      {
        name: 'New Purchase Order',
        url: '/purchase-orders/new',
        icon: 'icon-puzzle'
      },      
      {
        name: 'Settings',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      }      
    ]
  },
  {
    name: 'Items',
    url: '/items',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'New Item',
        url: '/items/new',
        icon: 'icon-puzzle'
      },          
    ]
  },
  {
    name: 'Accounts',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'New Account',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },          
    ]
  },
   {
    name: 'Reports',
    url: '/base',
    icon: 'icon-puzzle'   
  }
];
