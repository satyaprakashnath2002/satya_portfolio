import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto flex flex-col justify-center">
      {/* Hero Content */}
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-5"
        )}
      >
        {/* Side Line */}
        <div className="flex flex-row sm:flex-col justify-center items-center mt-5 sm:mt-0">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-32 violet-gradient mt-2 sm:mt-5" />
        </div>

        {/* About Me */}
        <div className="text-center sm:text-left mt-4 sm:mt-0">
          <h1 className={cn(styles.heroHeadText, "text-white text-4xl sm:text-6xl")}>
            Hi, I'm <span className="text-[#915eff]">Satya</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100 text-sm sm:text-lg")}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* 3D Computer Model */}
      <div className="w-full h-[400px] sm:h-[600px] mt-32 sm:mt-0">
        <ComputersCanvas />
      </div>

      {/* Scroll to about */}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
