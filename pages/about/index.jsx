import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaAmazon,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiAndroid,
  SiAndroidstudio,
  SiAngularjs,
  SiAngularuniversal,
  SiCanva,
  SiDjango,
  SiFigma,
  SiFlutter,
  SiFramer,
  SiKnative,
  SiLaravel,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNativescript,
  SiNextdotjs,
  SiNuxtdotjs,
  SiOracle,
  SiPostgresql,
  SiReact,
  SiRedbubble,
  SiRedis,
  SiSqlite,
  SiStudio3T,
  SiVuedotjs,
  SiWebflow,
  SiWix,
  SiXamarin,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skill",
    info: [
      {
        title: "UI/UX design",
        icons: [
          FaFigma,
          SiAdobexd,
          SiAdobeillustrator,
          SiAdobephotoshop,
          SiCanva,
        ],
      },
      {
        title: "web development",
        icons: [
          FaWordpress,
          SiWix,
          SiStudio3T,
          FaReact,
          SiVuedotjs,
          SiAngularjs,
          SiNextdotjs,
          SiNuxtdotjs,
          SiDjango,
          SiLaravel,
        ],
      },
      {
        title: "mobile app development",
        icons: [SiFlutter, SiReact, SiXamarin, SiAndroidstudio, SiAndroid],
      },
      {
        title: "database",
        icons: [
          SiMysql,
          SiMongodb,
          SiPostgresql,
          SiRedis,
          SiMariadb,
          SiOracle,
          SiSqlite,
        ],
      },
    ],
  },
  {
    title: "Recive",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-[100%] h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 w-[1000px] -right-[270px]"
      >
        <Avatar />
      </motion.div> */}

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-44">
        {/* text */}
        <div className="flex-1 flex flex-col justify-between">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 w-[480px] text-[40px] pt-[100px] font-sora"
          >
            Attractive <span className="text-accent">story</span> creates great
            design and coding.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] pt-[50px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 years ago, I started freelancing as a designer. After working as
            a designer for three years, I combined coding and design. Since
            then, I've worked remotely for agencies, consulted with startups,
            and collaborated on business and consumer digital products.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden pt-[50px] w-[200%] md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={9} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={104} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  satisfied customers
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={157} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Number of completed projects
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Award-winning.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
