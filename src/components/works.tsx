import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
};

// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col h-[520px] justify-between"
    >
      {/* Image Section */}
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Github Button */}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank", "noreferrer")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="Github"
              title="View Source Code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-5 flex-grow">
        <h3 className="text-white font-bold text-[22px] leading-tight">
          {name}
        </h3>

        <p className="mt-3 text-secondary text-[14px] leading-[22px]">
          {description}
        </p>
      </div>

      {/* Tags Section */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

// Works Section
export const Works = () => {
  return (
    <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        {/* Description */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            The following projects showcase my technical expertise through
            real-world implementations. Each project highlights my ability to
            design scalable architectures, build responsive interfaces, and
            deliver performance-optimized solutions using modern technologies.
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
