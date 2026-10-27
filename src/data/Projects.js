
const projects = [
  {
    id: 'emotify',
    number: '01',
    name: 'Emotify',
    category: 'Web Application',
    links: {
    github: null,
    demo: null,
    },
    description:
      'An interactive web application that detects facial expressions and transforms the detected emotions into downloadable stickers.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'face-api.js'],
    image: '/image/emotify.jpg',
    imageAlt: 'Emotify emotion detection application preview',
    type: 'web',
    details: {
      overview:
        'Emotify explores facial expression detection through an interactive web application. Users can turn detected emotions into visual stickers and download the results.',
      features: [
        {
          title: 'Facial Expression Detection',
          description:
            'Detects faces and analyzes facial expressions using face-api.js.',
        },
        {
          title: 'Emotion-Based Stickers',
          description:
            'Transforms the detection result into a sticker-based visual experience.',
        },
        {
          title: 'Sticker Download',
          description:
            'Allows users to download generated stickers.',
        },
      ],
      implementation:
        'HTML and CSS are used to build the interface, JavaScript handles application behavior, and face-api.js supports facial expression detection.',
    },
  },
  {
    id: 'corn-base',
    number: '02',
    name: 'Corn Base',
    category: 'Team Management',
    links: {
    github: null,
    demo: null,
   },

    description:
      'A web-based team management system designed to support collaboration and workflow management in game development.',
    technologies: ['Web Development', 'Game Production'],
    image: '/image/corn-base.jpg',
    imageAlt: 'Corn Base team management application preview',
    type: 'web',
    details: {
      overview:
        'Corn Base is a team management system concept focused on organizing collaboration and workflows in game development.',
      features: [
        {
          title: 'Team Management',
          description:
            'Provides a centralized interface for team-related activities.',
        },
        {
          title: 'Workflow Overview',
          description:
            'Presents project and task information in a dashboard layout.',
        },
        {
          title: 'Team Collaboration',
          description:
            'Designed to support coordination during game development.',
        },
      ],
      implementation:
        'The project focuses on a web-based interface for presenting team management and workflow information. Specific technologies can be documented after the implementation is verified.',
    },
  },
  
{
  id: 'datalens-ai',
  number: '03',
  name: 'DataLens AI',
  category: 'AI & Data Analytics',
  links: {
    github: null,
    demo: null,
  },

  description:
    'A web-based analytics application for exploring Puskesmas data across East Java through interactive dashboards, data visualizations, geographic maps, and experimental AI-assisted insights.',
  technologies: [
    'React',
    'Vite',
    'JavaScript',
    'Leaflet',
    'GeoJSON',
    'CSS',
    'Recharts',
    'Pandas',
    'OpenAI API',
    'Cloudflare Pages',
    'Render',
    'Git',
    'GitHub',
  ],
  image: '/image/datalens-ai.jpg',
  imageAlt: 'DataLens AI healthcare analytics dashboard preview',
  type: 'web',
  status: 'Completed',
  details: {
    overview:
      'DataLens AI is a team-developed web application for analyzing Puskesmas data across East Java. It combines dashboard summaries, interactive charts, geographic visualization, data input, and experimental AI-assisted analysis in one interface.',

    features: [
      {
        title: 'Healthcare Data Dashboard',
        description:
          'Presents summary information from Puskesmas data to help users explore healthcare datasets.',
      },
      {
        title: 'Interactive Data Visualization',
        description:
          'Uses Recharts to present data through interactive charts and visualizations.',
      },
      {
        title: 'Geographic Mapping',
        description:
          'Uses Leaflet and GeoJSON to visualize the geographic distribution of Puskesmas data across East Java.',
      },
      {
        title: 'Data Input and Upload',
        description:
          'Provides functionality for entering or uploading data for analysis.',
      },
      {
        title: 'Filtering and Search',
        description:
          'Helps users narrow down the displayed data to explore relevant information.',
      },
      {
        title: 'Experimental AI Insights',
        description:
          'Explores AI-assisted data analysis using the OpenAI API. The AI integration remains at the prototype or experimental stage.',
      },
    ],

    implementation:
      'The frontend is built with React, Vite, JavaScript, and CSS. Recharts supports data visualization, while Leaflet and GeoJSON support geographic mapping. Pandas is included in the data-processing stack. The project also explores the OpenAI API for AI-assisted analysis and deployment using Cloudflare Pages and Render or similar services. Git and GitHub support version control and collaboration. The AI integration and cloud configuration remain experimental.',

  },
},

  {
    id: 'code-crusader',
    number: '04',
    name: 'Code Crusader',
    category: 'Game Development',
    status: 'Completed',
    links: {
    github: null,
    demo: null,
    },

    description:
      'A 3D hack-and-slash game developed during a game development training program at PT Agate International.',
    technologies: ['Unity', 'C#', '3D Game'],
    image: '/image/code-crusader.png',
    imageAlt: 'Code Crusader 3D game preview',
    type: 'game',
    details: {
      overview:
        'Code Crusader is a 3D hack-and-slash game developed as a team project during game development training at PT Agate International. The project provided experience in collaborative game development using Unity and C#.',
      features: [
        {
          title: 'Game UI and Menu',
          description:
            'Worked on the game user interface and menu to support player navigation and interaction.',
        },
        {
          title: 'Level and Environment',
          description:
            'Contributed to the level and environment development to establish the game setting.',
        },
        {
          title: 'C# Programming',
          description:
            'Contributed to game development through C# programming within the Unity environment.',
        },
      ],
      implementation:
        'Developed using Unity and C#. My contributions focused on implementing UI and menu elements, developing levels and environments, and supporting the game development workflow as part of a team.',
    },
  },
]

export default projects
