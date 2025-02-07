import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-30 xl:text-left h-full container mx-[300px]">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-[80px]"
          >
            Web designer <span className="text-accent">Web engineer</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="pl-[100px] w-full xl:max-w-[700px] mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            He is a web designer with wide experience and a coder with strengths
            in website development using WordPress, React, Vue, Agular, Next,
            Nuxt, Django, Laravel, PowerCMS, Wix, STUDIO, Bubble, and Webflow. I
            mainly use Figma, XD, Photoshop, and illstrator as design tools.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        {/* <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[80%] max-h-[678px] absolute -bottom-32 lg:bottom-[-8%] lg:right-[0]"
        >
          <Avatar />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Home;
