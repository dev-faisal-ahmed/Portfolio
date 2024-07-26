import { TSkill } from '@/lib/types';

const frontEnds: TSkill[] = [
  {
    _id: 'FES1',
    name: 'NextJs',
    status: 'INTERMEDIATE',
    icon: 'RiNextjsFill',
  },
  {
    _id: 'FES2',
    name: 'React Js',
    status: 'EXPERT',
    icon: 'FaReact',
  },
  {
    _id: 'FES3',
    name: 'Redux ToolKit',
    status: 'INTERMEDIATE',
    icon: 'TbBrandRedux',
  },
  {
    _id: 'FES4',
    name: 'HTML',
    status: 'EXPERT',
    icon: 'FaHtml5',
  },
  {
    _id: 'FES5',
    name: 'CSS',
    status: 'EXPERT',

    icon: 'FaCss3Alt',
  },
  {
    _id: 'FES6',
    name: 'TailwindCss',
    status: 'EXPERT',

    icon: 'RiTailwindCssFill',
  },
  {
    _id: 'FES7',
    name: 'Firebase Auth',
    status: 'INTERMEDIATE',

    icon: 'RiFirebaseFill',
  },
  {
    _id: 'FES8',
    name: 'Ten Stack Query',
    status: 'INTERMEDIATE',

    icon: 'SiReacttable',
  },
];

const backends: TSkill[] = [
  {
    _id: 'BES1',
    name: 'Node Js',
    status: 'INTERMEDIATE',
    icon: 'IoLogoNodejs',
  },
  {
    _id: 'BES2',
    name: 'Express Js',
    status: 'EXPERT',
    icon: 'SiExpress',
  },
  {
    _id: 'BES3',
    name: 'MongoDb',
    status: 'EXPERT',
    icon: 'SiMongodb',
  },
  {
    _id: 'BES4',
    name: 'PostGre Sql',
    status: 'FAMILIAR',
    icon: 'BiLogoPostgresql',
  },
  {
    _id: 'BES5',
    name: 'My Sql',
    status: 'FAMILIAR',
    icon: 'TbBrandMysql',
  },
  {
    _id: 'BES6',
    name: 'Prisma',
    status: 'INTERMEDIATE',
    icon: 'SiPrisma',
  },
  {
    _id: 'BES7',
    name: 'GraphQl',
    status: 'FAMILIAR',
    icon: 'SiGraphql',
  },
  {
    _id: 'BES8',
    name: 'Zod',
    status: 'FAMILIAR',
    icon: 'SiZod',
  },
];

const tools: TSkill[] = [
  {
    _id: 'TS1',
    name: 'Vs Code',
    status: 'INTERMEDIATE',
    icon: 'VscVscode',
  },
  {
    _id: 'TS2',
    name: 'Post Man',
    status: 'INTERMEDIATE',
    icon: 'SiPostman',
  },
  {
    _id: 'TS3',
    name: 'Linux',
    status: 'INTERMEDIATE',
    icon: 'DiLinux',
  },
  {
    _id: 'TS4',
    name: 'Git',
    status: 'INTERMEDIATE',
    icon: 'FaGitAlt',
  },
];

export const skills = { frontEnds, backends, tools };
