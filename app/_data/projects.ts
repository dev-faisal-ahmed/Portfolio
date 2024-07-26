export const projects = [
  {
    _id: 'P-1',
    name: 'Travel Buddy',
    coverUrl: 'https://i.ibb.co/pPtSHRv/travel-buddy.png',
    description: `<p>The website is designed to serve as a community-driven platform for sharing and organizing tours. It allows users to create detailed tour itineraries, share their travel plans, and connect with others who are interested in joining their adventures. Whether you are a solo traveler looking for companionship or a seasoned explorer willing to guide others, this platform provides a seamless way to share your travel experiences and build a network of like-minded travelers.</p><h3><strong>Features: </strong></h3><ul><li><p>Users can add trip posts with detailed information, including spot, start date, end date, category, activities, and pictures.</p></li><li><p>All users can view all trip posts, including their own, on the trip page. Trip Details and Requests</p></li><li><p>On the detailed trip post page, users can send join requests and update their own posts.</p></li><li><p>Users can edit their profile and change their password.</p></li><li><p>Users can view, update, and delete all their added trips.</p></li><li><p>Users can see detailed views of join requests for their trips and accept or reject these requests.</p></li><li><p>Users can check the status (accepted or pending) of trips they have requested to join.</p></li><li><p>Home Page Search and Filter.</p></li><li><p>Users can search and filter trips by destination, travel dates, travel type, and keywords in the description.</p></li></ul><p></p>`,
    links: {
      client: 'https://github.com/dev-faisal-ahmed/TravelBuddy-Client',
      server: 'https://github.com/dev-faisal-ahmed/TravelBuddy-Server',
      live: 'https://travel-buddy-client.vercel.app',
    },
    technologies: [
      'NextJs',
      'MongoDb',
      'Mongoose',
      'React Hook Form',
      'TailwindCss',
      'ShadCn-UI',
      'Zod',
      'Express Js',
    ],
  },
  {
    _id: 'P-2',
    name: 'Ray-Shade',
    coverUrl: 'https://i.ibb.co/X4V27P8/ray-shade.png',
    description: `<p>This robust admin dashboard is designed specifically for managing eyeglass products. Administrators can effortlessly create, update, delete, and sell eyeglasses. The dashboard features advanced filtering options, allowing products to be sorted and filtered based on various attributes. It also includes a bulk delete function for streamlined management. Ensuring security, the system uses JWT tokens, restricting access to logged-in users only.</p><h3><strong>Features : </strong></h3><ul><li><p>User can create, update, delete and sell product.</p></li><li><p>Product can e filtered using various properties.</p></li><li><p>Bulk delete supported.</p></li><li><p>Users can edit their profile and change their password.</p></li><li><p>To ensure security jwt token has been used.</p></li></ul>`,
    links: {
      client:
        'https://github.com/dev-faisal-ahmed/ray-shade-beta/tree/master/client',
      server:
        'https://github.com/dev-faisal-ahmed/ray-shade-beta/tree/master/server',
      live: 'https://ray-shade-client.vercel.app/',
    },
    technologies: [
      'ReactJs',
      'Redux ToolKit',
      'RTK Query',
      'TailwindCss',
      'ShadCn-Ui',
      'ExpressJs',
      'MongoDb',
      'Mongoose',
    ],
  },
  {
    _id: 'P-3',
    name: 'Cash-IO',
    coverUrl: 'https://i.ibb.co/QDh5fC2/cash-io.png',
    description: `<p>This application is a powerful tool for tracking and managing your financial data. You can easily record your expenses, earnings, and borrowings, and view them in different categories and time periods. You can also create multiple wallets to separate your personal and business finances, or to share them with your family and friends. This application helps you analyze your transactions and make smart decisions for your financial future.</p><h3><strong>Features:</strong></h3><ul><li><p><strong>Expense and Revenue Tracking:</strong> Users can log and categorize their daily expenses and revenue sources.</p></li><li><p><strong>Summary Reports:</strong> Generate detailed reports on categorized expenses, monthly, daily, and yearly spending.</p></li><li><p><strong>Budgeting and Goal Setting:</strong> Set financial goals and create budgets to stay on track.</p></li><li><p><strong>Wallet System:</strong> Manage multiple wallets for different purposes and mark specific wallets as savings, restricting spending from those.</p></li></ul>`,
    links: {
      client: 'https://github.com/dev-faisal-ahmed/Cash-IO',
      server:
        'https://github.com/dev-faisal-ahmed/Cash-IO/tree/master/app/api/(server)',
      live: 'https://cash-io.vercel.app/',
    },
    technologies: [
      'Next Js',
      'Next Auth',
      'MongoDb',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'TailwnindCss',
      'ShadCn-Ui',
    ],
  },
  {
    _id: 'P-4',
    name: 'People Sync',
    coverUrl: 'https://i.ibb.co/LPSf4kc/people-synch.png',
    description: `<p>This efficient recruiting tracking app streamlines the hiring process for administrators. Admins can create job postings and track applications from candidates who can apply without creating an account. The app allows admins to review applications, update candidate statuses, and manage the entire recruitment process seamlessly.</p><h3><strong>Features : </strong></h3><ul><li><p>Admin can create job postings.</p></li><li><p>Candidates can apply without creating any account.</p></li><li><p>Admin can review and manage applications.</p></li><li><p>Status updates for candidate applications.</p></li><li><p>Streamlined recruitment tracking and management.</p></li></ul>`,
    links: {
      client:
        'https://github.com/dev-faisal-ahmed/PeopleSync/tree/master/client',
      server:
        'https://github.com/dev-faisal-ahmed/PeopleSync/tree/master/server',
      live: 'https://people-sync.vercel.app/',
    },
    technologies: [
      'ReactJs',
      'Redux ToolKit',
      'RTK Query',
      'TailwindCss',
      'ShadCn-Ui',
      'ExpressJs',
      'MongoDb',
      'Mongoose',
    ],
  },
];
