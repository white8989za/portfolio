import {
  SiReact,
  SiRedux,
  SiDocker,
  SiRancher,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiExpress,
  SiGo,
  SiLaravel,
  SiNestjs,
  SiNextdotjs,
  SiVuedotjs,
  SiStyledcomponents,
  SiMui,
  SiChakraui,
  SiTailwindcss,
  SiSlack,
} from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaSourcetree } from "react-icons/fa";

export const Skills = {
  backend: [
    {
      name: "Express - NodeJS",
      icon: SiExpress,
    },
    {
      name: "Laravel - PHP",
      icon: SiLaravel,
    },
    {
      name: "NestJS",
      icon: SiNestjs,
    },
    {
      name: "Golang",
      icon: SiGo,
    },
  ],
  frontend: [
    {
      name: "ReactJS - Typescript",
      icon: SiReact,
    },
    {
      name: "NextJS - Typescript",
      icon: SiNextdotjs,
    },

    {
      name: "Redux",
      icon: SiRedux,
    },
    {
      name: "VueJS - Javascript",
      icon: SiVuedotjs,
    },
  ],
  database: [
    {
      name: "MySQL",
      icon: SiMysql,
    },
    {
      name: "Redis",
      icon: SiRedis,
    },
    {
      name: "MongoDb",
      icon: SiMongodb,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
  ],
  cicd: [
    {
      name: "Docker",
      icon: SiDocker,
    },
    {
      name: "Rancher",
      icon: SiRancher,
    },
  ],
  "ui frameworks": [
    {
      name: "MaterialUI",
      icon: SiMui,
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
    },
    {
      name: "ChakraUI",
      icon: SiChakraui,
    },
    {
      name: "Styled Components",
      icon: SiStyledcomponents,
    },
    {
      name: "TailwindUI",
      icon: SiTailwindcss,
    },
    {
      name: "AntDesign",
      icon: AiOutlineAntDesign,
    },
  ],
  "productivity boost": [
    {
      name: "VSCode",
      icon: SiVisualstudiocode,
    },
    {
      name: "Git",
      icon: SiGit,
    },
    {
      name: "Slack",
      icon: SiSlack,
    },
    {
      name: "Bash",
      icon: SiGnubash,
    },
    {
      name: "SourceTree",
      icon: FaSourcetree,
    },
  ],
  mobile: [
    {
      name: "React Native",
      icon: SiReact,
    },
  ],
};

export const splitSkills = (srcArray) => {
  const arrLength = srcArray.length;
  const isEvenChunk = arrLength % 2 === 0;

  let chunk = 4;
  if (isEvenChunk) {
    chunk = arrLength / 2;
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3;
  }

  let i = 0;
  let j = 0;
  const temporary = [];
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk));
  }
  return temporary;
};
