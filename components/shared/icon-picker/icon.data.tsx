import { ReactNode } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';
import * as Io5Icons from 'react-icons/io5';
import * as BiIcons from 'react-icons/bi';
import * as VscIcons from 'react-icons/vsc';
import * as DiIcons from 'react-icons/di';

export const iconData: Record<string, ReactNode> = {
  // Fa
  FaReact: <FaIcons.FaReact />,
  FaHtml5: <FaIcons.FaHtml5 />,
  FaCss3Alt: <FaIcons.FaCss3Alt />,
  FaGitAlt: <FaIcons.FaGitAlt />,

  // Io
  IoLogoJavascript: <IoIcons.IoLogoJavascript />,

  // Si
  SiTypescript: <SiIcons.SiTypescript />,
  SiReacttable: <SiIcons.SiReacttable />,
  SiExpress: <SiIcons.SiExpress />,
  SiMongodb: <SiIcons.SiMongodb />,
  SiPrisma: <SiIcons.SiPrisma />,
  SiZod: <SiIcons.SiZod />,
  SiShadcnui: <SiIcons.SiShadcnui />,
  SiPostman: <SiIcons.SiPostman />,
  SiGraphql: <SiIcons.SiGraphql />,

  // Ri
  RiNextjsFill: <RiIcons.RiNextjsFill />,
  RiTailwindCssFill: <RiIcons.RiTailwindCssFill />,
  RiFirebaseFill: <RiIcons.RiFirebaseFill />,

  // Tb
  TbBrandRedux: <TbIcons.TbBrandRedux />,
  TbBrandMysql: <TbIcons.TbBrandMysql />,

  // Io5
  IoLogoNodejs: <Io5Icons.IoLogoNodejs />,

  // Bi
  BiLogoPostgresql: <BiIcons.BiLogoPostgresql />,

  //Vsc
  VscVscode: <VscIcons.VscVscode />,

  // Di
  DiLinux: <DiIcons.DiLinux />,
};
