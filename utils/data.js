import {
  FaReact,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaLinkedinIn,
  FaFacebook,
  FaSkype,
  FaNode,
  FaTypeScript,
  FaFigma,
} from 'react-icons/fa';

import { BiLogoTailwindCss } from 'react-icons/bi';
import { RiNextjsFill, RiSupabaseFill } from 'react-icons/ri';

import {
  SiCanva,
  SiCircleci,
  SiCypress,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFlydotio,
  SiGithub,
  SiGraphql,
  SiHeroku,
  SiJenkins,
  SiJest,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNetlify,
  SiPostgresql,
  SiPostman,
  SiTypescript,
  SiVercel,
  SiWebpack,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoFirebase } from 'react-icons/io5';

export const Menu_Links = [
  { id: '01', label: 'Home', offset: -100, to: 'home' },
  { id: '02', label: 'Skills', offset: -80, to: 'skills' },
  { id: '03', label: 'About', offset: -80, to: 'about' },
  { id: '04', label: 'Projects', offset: -80, to: 'projects' },
  { id: '05', label: 'Contact', offset: -80, to: 'contact' },
];

export const STATS = [
  { id: '01', count: '01', label: 'Year of \nExperience' },
  { id: '02', count: '03', label: 'Projects \nCompleted' },
  { id: '03', count: '06', label: 'GitHub \nStars' },
  { id: '04', count: '60+', label: 'Repositories \nOn GitHub' },
];

export const SKILL_TABS = [
  { id: '01', label: 'All', value: 'all' },
  { id: '02', label: 'Frontend', value: 'frontend' },
  { id: '03', label: 'Backend', value: 'backend' },
  { id: '04', label: 'Mobile', value: 'mobile' },
  { id: '05', label: 'DevOps', value: 'devops' },
  { id: '06', label: 'Testing', value: 'testing' },
  { id: '07', label: 'UI/UX', value: 'ui' },
];

export const SKILLS = [
  {
    id: '01',
    icon: FaHtml5,
    label: 'Html5',
    progress: 95,
    type: 'frontend',
    description:
      'Markup language for structuring web content.It provides a standardized approach to organizing elements on a web page,enabling browsers to interpret and display content effectively.',
  },
  {
    id: '02',
    icon: FaCss3,
    label: 'Css3',
    progress: 95,
    type: 'frontend',
    description:
      'Styling language used to design visually appealing and responsive web pages. It controls the layout, colors, fonts, spacing, and overall visual appearance of web elements.',
  },

  //tailwind css
  {
    id: '03',
    icon: BiLogoTailwindCss,
    label: 'Tailwind CSS',
    progress: 90,
    type: 'frontend',
    description:
      'Utility-first CSS framework that enables developers to create custom designs using low-level utility classes.Tailwind provides a set of predefined classes for common styling tasks .',
  },

  {
    id: '05',
    icon: IoLogoJavascript,
    label: 'JavaScript',
    progress: 90,
    type: 'frontend',
    description:
      'Core language for adding interactivity and dynamic functionality to websites  It allows developers to create interactive features such as form validations, animations, event handling ..',
  },

  //typescript

  {
    id: '06',
    icon: SiTypescript,
    label: 'TypeScript',
    progress: 70,
    type: 'frontend',
    description:
      'Well-versed in TypeScript for scalable applications superset of JavaScript that introduces static typing to the language, enhancing code quality, maintainability, and developer productivity.',
  },

  //react
  {
    id: '07',
    icon: FaReact,
    label: 'ReactJS',
    progress: 90,
    type: 'frontend',
    description:
      'JavaScript library for building dynamic and high-performance user interfaces, high-performance user interfaces, primarily for single-page apps, making it a powerful tool for building scalable app',
  },

  //Nextjs
  {
    id: '08',
    icon: RiNextjsFill,
    label: 'NextJS',
    progress: 90,
    type: 'frontend',
    description:
      'JavaScript framework for building universal (isomorphic) React apps with server-side rendering, static generation, and incremental static regeneration, Developing SSR and SSG React apps with Next.js.',
  },

  //Backend
  {
    id: '09',
    icon: FaNode,
    label: 'NodeJS',
    progress: 90,
    type: 'backend',
    description:
      'Proficient in building scalable and efficient backend applications using Node.js. Experienced in event-driven architecture, asynchronous programming, and optimizing server-side performance.',
  },

  //express
  {
    id: '10',
    icon: SiExpress,
    label: 'Express',
    progress: 60,
    type: 'backend',
    description:
      'Node.js web application framework that provides a robust set of features for building web applications and APIs. Expertise in developing RESTful APIs with Express.js. Skilled in middleware integration, error handling.',
  },

  //mongoDB

  {
    id: '11',
    icon: SiMongodb,
    label: 'MongoDB',
    progress: 60,
    type: 'backend',
    description:
      'MongoDB is a NoSQL database that uses a document-oriented data model, providing high scalability and flexibility for applications.',
  },

  //postgres

  {
    id: '12',
    icon: SiPostgresql,
    label: 'PostgreSQL',
    progress: 90,
    type: 'backend',
    description:
      'Proficient in designing relational and NoSQL database schemas. Experienced in writing optimized queries, indexing strategies, and handling transactions efficiently.',
  },
  {
    id: '13',
    icon: SiGraphql,
    label: 'GraphQl',
    progress: 80,
    type: 'backend',
    description:
      'Experienced in designing and implementing GraphQL APIs for efficient data fetching and manipulation. Skilled in schema design, queries, mutations. ',
  },

  //supabase

  {
    id: '15',
    icon: RiSupabaseFill,
    label: 'Supabase',
    progress: 85,
    type: 'backend',
    description:
      'Strong knowledge of Supabase for backend-as-a-service (BaaS) solutions. Experienced in authentication, real-time database operations, and integrating with PostgreSQL.',
  },

  {
    id: '16',
    icon: IoLogoFirebase,
    label: 'Firebase',
    progress: 85,
    type: 'backend',
    description:
      'Experienced in using Firebase for backend services, including Firestore, Realtime Database, Authentication, Cloud Functions, and Storage.',
  },

  // mobile
  {
    id: '17',
    icon: SiExpo,
    label: 'Expo (React Native)',
    progress: 95,
    type: 'mobile',
    description:
      ' Proficient in building cross-platform mobile applications using Expo with React Native. Experienced in managing Expo workflows, optimizing performance, and integrating native modules.',
  },
  // DevOps

  // Docker
  {
    id: '18',
    icon: SiDocker,
    label: 'Docker',
    progress: 55,
    type: 'devops',
    description:
      'Proficient in building Docker containers for microservices and deploying them on Kubernetes. Experienced in managing Dockerfiles, creating Docker Compose files, and optimizing container images.',
  },

  //github
  {
    id: '19',
    icon: SiGithub,
    label: 'GitHub',
    progress: 91,
    type: 'devops',
    description:
      'Experienced in using GitHub for version control, collaborating with other developers, and managing projects. Skilled in branching, merging, and resolving conflicts.',
  },

  // Docker
  {
    id: '20',
    icon: SiDocker,
    label: 'Docker',
    progress: 70,
    type: 'devops',
    description:
      'Proficient in building Docker containers for microservices and deploying them on Kubernetes. Experienced in managing Dockerfiles, creating Docker Compose files, and optimizing container images.',
  },

  // Lunix
  {
    id: '21',
    icon: SiLinux,
    label: 'Linux',
    progress: 96,
    type: 'devops',
    description:
      'Proficient in using Linux for managing servers, managing system resources, and performing administrative tasks. Experienced in configuring Linux systems, managing packages, and optimizing system performance.',
  },
  {
    id: '22',
    icon: VscVscode,
    label: 'VS Code',
    progress: 98,
    type: 'devops',
    description: 'Well-versed in TypeScript for scalable applications.',
  },

  // vercel
  {
    id: '23',
    icon: SiVercel,
    label: 'Vercel',
    progress: 74,
    type: 'devops',
    description:
      'Experienced in deploying React applications to Vercel, a serverless platform for hosting and deploying applications.',
  },

  // fly.io
  {
    id: '24',
    icon: SiFlydotio,
    label: 'Fly.io',
    progress: 80,
    type: 'devops',
    description:
      'Experienced in deploying React applications to Fly.io, a serverless platform for hosting and deploying applications.',
  },

  // heroku
  {
    id: '25',
    icon: SiHeroku,
    label: 'Heroku',
    progress: 60,
    type: 'devops',
    description:
      'Experienced in deploying React applications to Heroku, a cloud platform for hosting and deploying applications.',
  },

  // netlify
  {
    id: '26',
    icon: SiNetlify,
    label: 'Netlify',
    progress: 70,
    type: 'devops',
    description:
      'Experienced in deploying React applications to Netlify, a cloud platform for hosting and deploying applications.',
  },

  // github actions

  // circleci
  {
    id: '27',
    icon: SiCircleci,
    label: 'CircleCI',
    progress: 50,
    type: 'devops',
    description:
      'Experienced in setting up CI/CD pipelines using CircleCI for React applications and APIs. Experienced in managing workflows, configuring jobs, and integrating with other tools.',
  },

  // testing

  // jest

  {
    id: '28',
    icon: SiJest,
    label: 'Jest',
    progress: 70,
    type: 'testing',
    description:
      'Proficient in writing unit tests using Jest for React components, backend services, and APIs. Experienced in setting up test environments, creating test suites, and writing assertions.',
  },

  // E2E
  {
    id: '29',
    icon: SiCypress,
    label: '2E2',
    progress: 70,
    type: 'testing',
    description:
      'Proficient in writing end-to-end tests using Cypress for React applications and APIs. Experienced in setting up test environments, creating test suites, and writing assertions.',
  },

  // UI
  // figma
  {
    id: '30',
    icon: FaFigma,
    label: 'Figma',
    progress: 60,
    type: 'ui',
    description:
      'Skilled in translating Figma/Adobe XD designs into pixel-perfect React & Next.js applications while maintaining design consistency and responsiveness.',
  },

  // canvas
  {
    id: '31',
    icon: SiCanva,
    label: 'Canva',
    progress: 50,
    type: 'ui',
    description:
      'Skilled in translating Canva designs into pixel-perfect React & Next.js applications while maintaining design consistency and responsiveness.',
  },

  // postman
  {
    id: '32',
    icon: SiPostman,
    label: 'Postman',
    progress: 50,
    type: 'testing',
    description:
      'Experienced in using Postman for API testing, mocking, and testing APIs. Experienced in creating collections, sending requests, and managing test cases.',
  },
];

export const ABOUT_ME = {
  content: `I am a passionate and dedicated Fullstack Web Developer with a strong foundation in both front-end and back-end technologies. My journey in software development has allowed me to build robust, user-centric web and mobile applications using modern frameworks and tools. I specialize in React.js, Next.js, TypeScript, Node.js, PostgreSQL, and other key technologies. Additionally, I have experience in mobile development, particularly with React Native and Expo.
  I am always eager to learn and grow, My problem-solving skills, collaborative nature, and commitment to continuous learning drive me to consistently deliver creative solutions and collaborate effectively with development teams.


  `,
  socialLinks: [
    {
      id: '02',
      label: 'twit',
      link: 'https://x.com/dev_IraBruce',
      icon: FaTwitter,
    },
    {
      id: '03',
      label: 'github',
      link: 'https://github.com/irabruce10',
      icon: FaGithub,
    },
    {
      id: '04',
      label: 'linkedin-in',
      link: 'https://www.linkedin.com/in/bruce-irakoze-421816230/',
      icon: FaLinkedinIn,
    },
  ],
  email: 'irabruce20@gmail.com',
  phone: '+43 681 10842361',
  address: 'Leonfeldner straße 158, Linz 4040',
};

export const PROJECTS = [
  {
    id: '01',
    title: 'E-SOKO - NEXTJS Ecommerce Web Store',
    image: '/images/project1.png',
    tags: ['Github', 'Live View'],
    icon: [FaGithub, FaLinkedin],
    linkGit: 'https://github.com/irabruce10/next.js-ecommerce-store',
    linkLive: 'https://e-soko.fly.dev/',
  },
  {
    id: '02',
    title: 'AKAGURIRO - REACT NATIVE MOBILE APPLICATION',
    image: '/images/project2.png',
    tags: ['Github', 'Live View'],
    linkGit: 'https://github.com/irabruce10/akaguriro',
    linkLive:
      'https://firebasestorage.googleapis.com/v0/b/apartmstorage.firebasestorage.app/o/VIDEO%2FAkaguriro--Presentation.mp4?alt=media&token=0cf69dbf-2c42-4695-9706-7f81af5674de',
  },
  {
    id: '03',
    title: 'Project 3',
    image: '/images/project3.png',
    tags: ['Loading', 'Loading'],
    linkGit: '',
    linkLive: '',
  },
  // {
  //   id: '04',
  //   title: 'Project 4',
  //   image: '/images/project4.png',
  //   tags: ['Github', 'Live View'],
  //   linkGit: 'https://github.com/irabruce10',
  //   linkLive: 'https://google.com',
  // },
];
