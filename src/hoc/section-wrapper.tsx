import { motion } from "framer-motion";
import { styles } from "../styles";
import { cn } from "../utils/lib";

type SectionWrapperProps = {
  children: React.ReactNode;
  idName?: string;
};

export const SectionWrapper = ({ children, idName }: SectionWrapperProps) => (
  <section
    className={cn(styles.padding, "max-w-7xl mx-auto relative z-0")}
  >
    <span className="hash-span" id={idName}>
      &nbsp;
    </span>
    {children}
  </section>
);
