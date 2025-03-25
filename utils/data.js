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
} from 'react-icons/fa';

import { BilogoJavascript, BiLogoTailwindCss } from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';

import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from 'react-icons/vsc';
import { IoLogoJavascript } from 'react-icons/io';

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
  { id: '06', label: 'UI/UX', value: 'ui' },
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
    label: 'React',
    progress: 90,
    type: 'frontend',
    description:
      'JavaScript library for building dynamic and high-performance user interfaces, high-performance user interfaces, primarily for single-page apps, making it a powerful tool for building scalable app',
  },

  //Nextjs
  {
    id: '08',
    icon: RiNextjsFill,
    label: 'Next JS',
    progress: 90,
    type: 'frontend',
    description:
      'JavaScript framework for building universal (isomorphic) React apps with server-side rendering, static generation, and incremental static regeneration, Developing SSR and SSG React apps with Next.js.',
  },

  ,
  //mongoDB

  //graphql
  // {
  //   id: '08',
  //   icon: VscCommentUnresolved,
  //   label: 'GraphQL',

  // {
  //   id: '04',
  //   icon: FaNodeJs,
  //   label: 'Node JS',
  //   progress: 90,
  //   type: 'backend',
  //   description:
  //     'Experiment with LinkedIn  experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment',
  // },

  //mobile
  // {
  //   id: '05',
  //   icon: FaNode,
  //   label: 'Expo',
  //   progress: 90,
  //   type: 'mobile',
  //   description:
  //     'Experiment with LinkedIn  experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment',
  // },

  //devops
  {
    id: '16',
    icon: VscVscode,
    label: 'VS Code',
    progress: 90,
    type: 'devops',
    description: 'Well-versed in TypeScript for scalable applications.',
  },
  // UI
  {
    id: '17',
    icon: SiWebpack,
    label: 'Webpack',
    progress: 90,
    type: 'ui',
    description:
      'Experiment with LinkedIn  experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment',
  },
  {
    id: '18',
    icon: SiMongodb,
    label: 'MongoDB',
    progress: 90,
    type: 'backend',
    description:
      'Experiment with LinkedIn  experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment',
  },
];

export const ABOUT_ME = {
  content: `About me in React with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment
  About me in React with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment.


  `,
  content: `About me in React with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment
  About me in React with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment.


  `,
  socialLinks: [
    { id: '01', label: 'instagram', link: '#', icon: FaInstagram },
    { id: '02', label: 'twit', link: '#', icon: FaTwitter },
    { id: '03', label: 'github', link: '#', icon: FaGithub },
    { id: '04', label: 'linkedin-in', link: '#', icon: FaLinkedinIn },
    { id: '05', label: 'facebook', link: '#', icon: FaFacebook },
    { id: '06', label: 'skype', link: '#', icon: FaSkype },
  ],
  email: 'email@example.com',
  phone: '1234567890',
  address: '123 Main St, City, State, Zip',
};

export const PROJECTS = [
  {
    id: '01',
    title: 'Project 1',
    image: '/images/project1.png',
    tags: ['project1', 'project'],
  },
  {
    id: '02',
    title: 'Project 2',
    image: '/images/project2.png',
    tags: ['project', 'project'],
  },
  {
    id: '03',
    title: 'Project 3',
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // link: '#',
    // github: '#',
    image: '/images/project3.png',
    tags: ['project', 'project'],
  },
  {
    id: '04',
    title: 'Project 4',
    image: '/images/project4.png',
    tags: ['project', 'project'],
  },
  {
    id: '05',
    title: 'Project 5',
    image: '/images/project2.png',
    tags: ['project', 'project'],
  },
];
