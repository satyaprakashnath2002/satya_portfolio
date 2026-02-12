import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-10 px-4 sm:px-0">
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div
            key={technology.name}
            className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center"
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
