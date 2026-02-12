import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card Component
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      className="w-full xs:w-[220px] sm:w-[250px]"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          />
          <h3 className="text-white text-[18px] sm:text-[20px] font-bold text-center mt-2">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About Section
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Section Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Section Description */}
        <motion.p
          variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px] mt-4"
        >
          I’m a Full-Stack Web Developer skilled in JavaScript, TypeScript, React.js, Node.js, and MongoDB, with experience building responsive, scalable web applications. I also have hands-on exposure to software testing and QA, and I enjoy collaborating to create efficient, user-friendly solutions that solve real-world problems.
        </motion.p>

        {/* Services / Skills Cards */}
        <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
