import { TProject } from '@/lib/types';

export const projects: TProject[] = [
  {
    id: 'P1',
    coverUrl: '/images/projects/medipath.png',
    title: 'Medipath - Clinic Billing & Expense Tracking System',
    description:
      'A comprehensive financial management system currently used by two diagnostic centers to manage billing, expenses, commissions, and gain insights through analytics.',
    features: [
      'Generate and manage patient bills with detailed breakdowns.',
      'Add expense categories and monitor clinic expenditures.',
      'Automatically calculate and track doctor and agent commissions.',
      'Analyze transactions for revenue and spending insights.',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Express.js',
      'Mongoose',
      'Shadcn-UI',
      'React Hook Form',
      'TanStack Query',
      'TanStack Table',
    ],
    links: {
      live: 'https://medipath-client-beta.vercel.app',
      client: 'https://github.com/dev-faisal-ahmed/Medipath/tree/master/client',
      server: 'https://github.com/dev-faisal-ahmed/Medipath/tree/master/server',
    },
  },
  {
    id: 'P2',
    coverUrl: '/images/projects/task-flow.png',
    title: 'Task Flow – Advanced To-Do App with AI & Notifications',
    description:
      'A feature-rich task management platform with smart automation, AI assistance, and an intuitive UI built using Next.js and Hasura.',
    features: [
      'Integrated user authentication, task creation, and category assignment.',
      'AI-powered task description generation.',
      'Automatic email notifications upon task completion.',
      'Trash folder for deleted tasks with recovery option.',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Hasura',
      'Apollo Client',
      'PostgreSQL',
      'Shadcn-UI',
      'React Hook Form',
      'NodeMailer',
    ],
    links: {
      live: 'https://ost-task-flow.vercel.app',
      code: 'https://github.com/dev-faisal-ahmed/TaskFlow',
    },
  },
  {
    id: 'P3',
    coverUrl: '/images/projects/travel-buddy.png',
    title: 'Travel Buddy - Tour Sharing & Planning Platform',
    description:
      'A community-driven platform that allows users to create, manage, and join trip plans. Built to connect travelers, manage requests, and organize itineraries with search and filter functionality.',
    features: [
      'Create and manage tour posts with location, dates, activities, and images.',
      'Send and manage join requests for tours with approval system.',
      'Search and filter tours based on destination, date, and category.',
      'Edit profiles, change passwords, and view tour statuses.',
    ],
    techStack: [
      'Next.js',
      'MongoDB',
      'Mongoose',
      'React Hook Form',
      'Tailwind CSS',
      'Shadcn-UI',
      'Zod',
      'Express.js',
    ],
    links: {
      live: 'https://travel-buddy-client.vercel.app',
      client: 'https://github.com/dev-faisal-ahmed/TravelBuddy-Client',
      server: 'https://github.com/dev-faisal-ahmed/TravelBuddy-Server',
    },
  },
  {
    id: 'P4',
    coverUrl: '/images/projects/ray-shade.png',
    title: 'Ray-Shade - Eyewear Product Management Dashboard',
    description:
      'An admin dashboard for managing eyeglass products with CRUD operations, advanced filtering, and authentication via JWT.',
    features: [
      'Create, update, delete, and sell eyeglass products.',
      'Filter products using various attributes.',
      'Bulk delete supported for faster management.',
      'JWT-based secure login and user authentication.',
    ],
    techStack: [
      'React.js',
      'Redux Toolkit',
      'RTK Query',
      'Tailwind CSS',
      'Shadcn-UI',
      'Express.js',
      'MongoDB',
      'Mongoose',
    ],
    links: {
      live: 'https://ray-shade-client.vercel.app/',
      client:
        'https://github.com/dev-faisal-ahmed/ray-shade-beta/tree/master/client',
      server:
        'https://github.com/dev-faisal-ahmed/ray-shade-beta/tree/master/server',
    },
  },
  {
    id: 'P5',
    coverUrl: '/images/projects/cash-io.png',
    title: 'Cash-IO - Personal Finance Tracker with Wallet System',
    description:
      'A comprehensive application to manage personal or business finances with transaction tracking, budgeting, and goal setting.',
    features: [
      'Track and categorize income and expenses across wallets.',
      'Generate summary reports (monthly, yearly, etc.).',
      'Set budgets and financial goals with progress tracking.',
      'Support for multiple wallets, including savings mode.',
    ],
    techStack: [
      'Next.js',
      'NextAuth',
      'MongoDB',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'Tailwind CSS',
      'Shadcn-UI',
    ],
    links: {
      live: 'https://cash-io.vercel.app/',
      client: 'https://github.com/dev-faisal-ahmed/Cash-IO',
      server:
        'https://github.com/dev-faisal-ahmed/Cash-IO/tree/master/app/api/(server)',
    },
  },
];
