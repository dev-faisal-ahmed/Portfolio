export const projects = [
  {
    name: 'Travel Buddy',
    description:
      'The website is designed to serve as a community-driven platform for sharing and organizing tours. It allows users to create detailed tour itineraries, share their travel plans, and connect with others who are interested in joining their adventures. Whether you are a solo traveler looking for companionship or a seasoned explorer willing to guide others, this platform provides a seamless way to share your travel experiences and build a network of like-minded travelers.',
    features: [
      'Users can add trip posts with detailed information, including spot, start date, end date, category, activities, and pictures.',
      'All users can view all trip posts, including their own, on the trip page. Trip Details and Requests',
      'On the detailed trip post page, users can send join requests and update their own posts.',
      'Users can edit their profile and change their password.',
      'Users can view, update, and delete all their added trips.',
      'Users can see detailed views of join requests for their trips and accept or reject these requests.',
      'Users can check the status (accepted or pending) of trips they have requested to join.',
      'Home Page Search and Filter.',
      'Users can search and filter trips by destination, travel dates, travel type, and keywords in the description.',
    ],
    coverUrl: 'https://i.ibb.co/pPtSHRv/travel-buddy.png',
    links: [
      {
        title: 'Client Code',
        url: 'https://github.com/dev-faisal-ahmed/TravelBuddy-Client',
      },
      {
        title: 'Server Code',
        url: 'https://github.com/dev-faisal-ahmed/TravelBuddy-Server',
      },
    ],
    liveLink: 'https://travel-buddy-client.vercel.app',

    technologies: [
      'Next Js',
      'MongoDb',
      'Mongoose',
      'React Hook Form',
      'TailwindCss',
      'ShadCn-Ui',
      'Zod',
      'Express Js',
    ],
  },

  {
    name: 'Cash-IO',
    description:
      'This application is a powerful tool for tracking and managing your financial data. You can easily record your expenses, earnings, and borrowings, and view them in different categories and time periods. You can also create multiple wallets to separate your personal and business finances, or to share them with your family and friends. This application helps you analyze your transactions and make smart decisions for your financial future.',
    coverUrl: 'https://i.ibb.co/QDh5fC2/cash-io.png',
    links: [
      {
        title: 'Client Code ',
        url: 'https://github.com/dev-faisal-ahmed/Cash-IO',
      },
      {
        title: 'Server Code ',
        url: 'https://github.com/dev-faisal-ahmed/Cash-IO/tree/master/app/api/(server)',
      },
    ],
    liveLink: 'https://cash-io.vercel.app/',

    technologies: [
      'Next Js',
      'Next Auth',
      'MongoDb',
      'Redux ToolKit',
      'Redux Query',
      'TailwindCss',
      'ShadCn-Ui',
    ],
  },

  {
    name: 'Ray-Shade',
    description:
      'This robust admin dashboard is designed specifically for managing eyeglass products. Administrators can effortlessly create, update, delete, and sell eyeglasses. The dashboard features advanced filtering options, allowing products to be sorted and filtered based on various attributes. It also includes a bulk delete function for streamlined management. Ensuring security, the system uses JWT tokens, restricting access to logged-in users only.',
    features: [
      'User can create, update, delete and sell product.',
      'Product can e filtered using various properties.',
      'Bulk delete supported.',
      'Users can edit their profile and change their password.',
      'To ensure security jwt token has been used.',
    ],
    coverUrl: 'https://i.ibb.co/X4V27P8/ray-shade.png',
    links: [
      {
        title: 'Client Code ',
        url: 'https://github.com/dev-faisal-ahmed/ray-shade-beta/tree/master/client',
      },
      {
        title: 'Server Code ',
        url: 'https://github.com/dev-faisal-ahmed/ray-shade-beta/tree/master/server',
      },
    ],
    liveLink: 'https://ray-shade-client.vercel.app/',
    technologies: [
      'React Js',
      'Redux ToolKit',
      'Redux Query',
      'TailwindCss',
      'ShadCn-Ui',
      'ExpressJs',
      'MongoDb',
      'Mongoose',
    ],
  },

  {
    name: 'People Sync',
    description:
      'This efficient recruiting tracking app streamlines the hiring process for administrators. Admins can create job postings and track applications from candidates who can apply without creating an account. The app allows admins to review applications, update candidate statuses, and manage the entire recruitment process seamlessly.',
    features: [
      'Admin can create job postings.',
      'Candidates can apply without an account.',
      'Admin can review and manage applications.',
      'Status updates for candidate applications.',
      'Streamlined recruitment tracking and management.',
    ],
    coverUrl: 'https://i.ibb.co/LPSf4kc/people-synch.png',
    links: [
      {
        title: 'Client Code ',
        url: 'https://github.com/dev-faisal-ahmed/PeopleSync/tree/master/client',
      },
      {
        title: 'Server Code ',
        url: 'https://github.com/dev-faisal-ahmed/PeopleSync/tree/master/server',
      },
    ],
    liveLink: 'https://people-sync.vercel.app/',
    technologies: [
      'React Js',
      'Redux ToolKit',
      'Redux Query',
      'TailwindCss',
      'ShadCn-Ui',
      'ExpressJs',
      'MongoDb',
      'Mongoose',
    ],
  },
];
