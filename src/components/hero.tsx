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
          "absolute inset-0 top-[60px] sm:top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5"
        )}
      >
        {/* Side Line */}
        <div className="flex flex-row sm:flex-col justify-center items-center mt-4 sm:mt-0">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-24 sm:h-80 violet-gradient mt-2 sm:mt-5" />
        </div>

        {/* About Me */}
        <div className="text-center sm:text-left mt-3 sm:mt-0">
          <h1 className={cn(styles.heroHeadText, "text-white text-3xl sm:text-6xl font-bold")}>
            Hi, I'm <span className="text-[#915eff]">Satya</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100 text-sm sm:text-lg max-w-md sm:max-w-xl mx-auto sm:mx-0")}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* 3D Computer Model */}
      <div className="w-full h-[300px] sm:h-[600px] mt-28 sm:mt-0">
        <ComputersCanvas />
      </div>

      {/* Scroll to About */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
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
