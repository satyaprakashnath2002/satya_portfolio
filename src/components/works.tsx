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

// -----------------------------
// Project Card
// -----------------------------
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.6)}
    className="w-full sm:w-auto"
  >
    {/* Tilt Enabled Only On Desktop */}
    <div className="hidden sm:block">
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1}
        transitionSpeed={450}
        className="
          bg-tertiary 
          p-5 
          rounded-2xl 
          sm:w-[340px] 
          flex 
          flex-col 
          justify-between
          min-h-[480px]
          sm:min-h-[520px]
        "
      >
        {/* Image */}
        <div className="relative w-full h-[200px] sm:h-[230px]">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Github Button */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() =>
                window.open(source_code_link, "_blank", "noreferrer")
              }
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

        {/* Content */}
        <div className="mt-5 flex-grow">
          <h3 className="text-white font-bold text-[20px] sm:text-[22px] leading-tight">
            {name}
          </h3>

          <p className="mt-3 text-secondary text-[14px] leading-[22px]">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIdx) => (
            <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[13px]")}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>

    {/* ---------------- MOBILE VERSION (NO TILT = MORE STABLE) ---------------- */}
    <div
      className="
        sm:hidden
        bg-tertiary 
        p-4 
        rounded-2xl 
        flex 
        flex-col 
        justify-between
        min-h-[440px]
      "
    >
      {/* Image */}
      <div className="relative w-full h-[190px]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() =>
              window.open(source_code_link, "_blank", "noreferrer")
            }
            className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="Github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 flex-grow">
        <h3 className="text-white font-bold text-[19px]">{name}</h3>

        <p className="mt-2 text-secondary text-[13px] leading-[20px]">
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[12px]")}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

// -----------------------------
// Works Section
// -----------------------------
export const Works = () => {
  return (
    <SectionWrapper idName="projects">
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
            className="
              mt-3 
              text-secondary 
              text-[15px] 
              sm:text-[17px] 
              max-w-3xl 
              leading-[26px] 
              sm:leading-[30px]
            "
          >
            The following projects showcase my technical expertise through
            real-world implementations. Each project highlights my ability to
            design scalable architectures, build responsive interfaces, and
            deliver performance-optimized solutions using modern technologies.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div
          className="
            mt-12 
            sm:mt-20 
            flex 
            flex-wrap 
            gap-6 
            sm:gap-7 
            justify-center 
            w-full
          "
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
