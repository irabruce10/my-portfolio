import {
  FaReact,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaHtml5,
  FaCss3,
  FaNodeJs,
} from 'react-icons/fa';

import { BilogoJavascript } from 'react-icons/bi';
import { SiExpress, SiMongodb, SiPostgresql, SiWebpack } from 'react-icons/si';
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from 'react-icons/vsc';

export const Menu_Links = [
  { id: '01', label: 'Home', offset: -100, to: 'home' },
  { id: '02', label: 'About', offset: -80, to: 'about' },
  { id: '03', label: 'Contact', offset: -80, to: 'contact' },
];

export const STATS = [
  { id: '01', count: '10', label: 'Years of \nExperience' },
  { id: '02', count: '5', label: 'Projects \nCompleted' },
  { id: '03', count: '50', label: 'GitHub \nStars' },
];

export const SKILL_TABS = [
  { id: '01', label: 'All', value: 'all' },
  { id: '02', label: 'Frontend', value: 'frontend' },
  { id: '03', label: 'Backend', value: 'backend' },
  { id: '04', label: 'DevOps', value: 'devops' },
  { id: '05', label: 'UI/UX', value: 'ui' },
];

export const SKILLS = [
  {
    id: '01',
    icon: <FaReact />,
    label: 'ReactJS',
    progress: 95,
    type: 'frontend',
    description: 'Exper....',
  },
  {
    id: '02',
    icon: <FaGithub />,
    label: 'GitHub',
    progress: 95,
    type: 'frontend',
    description: '',
  },
  { id: '03', icon: <FaLinkedin />, label: 'LinkedIn' },
];

export const ABOUT_ME = {
  content: `About me in React.............`,
  socialLinks: [
    { id: '01', label: 'instagram', link: '#', icon: <FaInstagram /> },
    { id: '02', label: 'twit', link: '#', icon: <FaTwitter /> },
    { id: '03', label: 'html5', link: '#', icon: <FaHtml5 /> },
    { id: '04', label: 'css', link: '#', icon: <FaCss3 /> },
    { id: '05', label: 'node', link: '#', icon: <FaNodeJs /> },
    { id: '06', label: 'expr', link: '#', icon: <SiExpress /> },
    { id: '07', label: 'mong', link: '#', icon: <SiMongodb /> },
  ],
  email: 'email@example.com',
  phone: '1234567890',
  address: '123 Main St, City, State, Zip',
};

export const PROJECTS = [
  {
    id: '01',
    title: 'Project 1',
    image: '/images/project1.jpg',
    tags: ['project', 'project'],
  },
  {
    id: '02',
    title: 'Project 2',
    image: '/images/project2.jpg',
    tags: ['project', 'project'],
  },
  {
    id: '03',
    title: 'Project 3',
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // link: '#',
    // github: '#',
    image: '/images/project3.jpg',
    tags: ['project', 'project'],
  },
];
