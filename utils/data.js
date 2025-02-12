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
  { id: '02', label: 'Skills', offset: -80, to: 'skills' },
  { id: '03', label: 'About', offset: -80, to: 'about' },
  { id: '04', label: 'Projects', offset: -80, to: 'projects' },
  { id: '05', label: 'Contact', offset: -80, to: 'contact' },
];

export const STATS = [
  { id: '01', count: '10', label: 'Years of \nExperience' },
  { id: '02', count: '5', label: 'Projects \nCompleted' },
  { id: '03', count: '50', label: 'GitHub \nStars' },
  { id: '04', count: '100+', label: 'Followers \nOn GitHub' },
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
    icon: FaHtml5,
    label: 'Html5',
    progress: 95,
    type: 'frontend',
    description:
      'Exper....  experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment',
  },
  {
    id: '02',
    icon: FaCss3,
    label: 'Css3',
    progress: 95,
    type: 'frontend',
    description:
      ' experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment',
  },
  {
    id: '03',
    icon: FaReact,
    label: 'React JS',
    progress: 90,
    type: 'frontend',
    description:
      'Experiment with LinkedIn  experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment with GitHub experiment',
  },
  {
    id: '04',
    icon: FaNodeJs,
    label: 'Node JS',
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
