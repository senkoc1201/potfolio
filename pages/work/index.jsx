import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container pl-[400px]">
        <div className="flex flex-col xl:flex-row gap-x-10">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-[25%] xl:w-[400px]"
            >
              Products <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[600px] text-[15px]"
            >
              I have a proven track record and expertise in web design and
              website production.
              <br />
              We are confident in providing web designs that combine beauty and
              functionality
              <br />
              My advantage is to provide customized designs according to
              customers' needs.
              <br />
              We listen carefully to your needs and vision and recommend the
              best design approach to implement them.
              <br />
              When creating a website, we place emphasis on ease of use and
              comfort.
              <br />
              To optimize the user experience, we provide intuitive navigation,
              smooth page transitions, fast loading speeds, and a stress-free
              environment for visitors to browse your site.
              <br />
              We also take the performance and security of our website
              seriously.
              <br />
              We leverage the latest technology and best practices to ensure
              fast page loads and secure data.
              <br />
              To protect your trust, we take SSL encryption and security
              measures to the forefront.
              <br />
              We communicate smoothly with our clients, accurately understand
              their needs, and provide the highest quality websites to make them
              a reality.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[95%] pt-[25%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
