export const PRODUCTS: string[] = [
  'Dell Desktop & AIO',
  'Dell Laptop',
  'HP Laptop',
  'HP Desktop & AIO',
  'Lenovo Laptops',
  'Workstations',
  'Tower Server',
  'Rack Server',
  'AI Supercomputer',
  'Storages',
  'Firewall',
  'UPS',
];

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    title: 'Annual Maintenance Contract',
    description: 'Scheduled upkeep so hardware and systems keep performing.',
    icon: '◍',
  },
  {
    title: 'CCTV Solutions',
    description: 'Camera and surveillance systems sized to your site.',
    icon: '◉',
  },
  {
    title: 'Access Control & Time Attendance',
    description:
      'Entry management and staff attendance tracking in one system.',
    icon: '▣',
  },
  {
    title: 'Gate Barriers',
    description: 'Vehicle access control for offices, sites and facilities.',
    icon: '◫',
  },
  {
    title: 'New Office Setup & Migration',
    description: 'Network, hardware and systems ready before you move in.',
    icon: '◈',
  },
  {
    title: 'ELV & ICT Solutions',
    description:
      'Low-voltage and communications infrastructure, designed and installed.',
    icon: '◐',
  },
  {
    title: 'Data Recovery Solutions',
    description: 'Recovering critical data after loss, failure or damage.',
    icon: '◆',
  },
];

export interface Feature {
  idx: string;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    idx: '01',
    title: 'Managed & professional services',
    description:
      'Certified specialists across vendors, technologies and industry standards.',
  },
  {
    idx: '02',
    title: 'Intelligent workplace management',
    description:
      'People, processes, platforms and products, connected end to end.',
  },
  {
    idx: '03',
    title: 'Leading technology distribution',
    description:
      "One-stop supply chain access to the world's major hardware brands.",
  },
  {
    idx: '04',
    title: 'IT infrastructure design',
    description:
      'Physical, hybrid or cloud builds shaped around your business strategy.',
  },
];

export interface ProcessStep {
  idx: string;
  title: string;
  description: string;
}

export const PROCESS: ProcessStep[] = [
  {
    idx: '01',
    title: 'Free consultation',
    description: 'A clear read on your IT needs before anything is proposed.',
  },
  {
    idx: '02',
    title: '24×7 support',
    description:
      'Specialists on call around the clock, over a secure connection.',
  },
  {
    idx: '03',
    title: 'Fast delivery',
    description:
      'Products and fixes delivered on the shortest realistic timeline.',
  },
  {
    idx: '04',
    title: 'Quality hardware',
    description: 'Reliable equipment at prices that stay competitive.',
  },
];

export const INDUSTRIES = [
  'Government and International Organization',
  'Banking and Financial',
  'Manufacturing',
  'Media and Communication',
  'Construction',
  'Health care',
  'Education',
  'Retail',
];
