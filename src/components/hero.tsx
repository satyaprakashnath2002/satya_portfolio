import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen  mx-auto overflow-hidden">
      
      {/* Canvas Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <ComputersCanvas />
      </div>

      {/* Content */}
      <div
        className={cn(
          styles.paddingX,
          "relative z-10 max-w-7xl mx-auto",
          // 👇 KEY FIX HERE
          "pt-28 sm:pt-40"
        )}
      >
        <div className="flex flex-row items-start gap-5">
          
          {/* Left Purple Line (Hide on Mobile) */}
          <div className="hidden sm:flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 h-80 violet-gradient" />
          </div>

          {/* Text Content */}
          <div className="w-full text-center sm:text-left">
            <h1
              className={cn(
                styles.heroHeadText,
                "text-white leading-tight"
              )}
            >
              Hi, I'm <span className="text-[#915eff]">Satya</span>
            </h1>

            <p
              className={cn(
                styles.heroSubText,
                "mt-4 text-white-100 max-w-xl mx-auto sm:mx-0"
              )}
            >
              I develop 3D visuals, user interfaces and modern web applications.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};
