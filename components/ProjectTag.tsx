import React from "react";
import { motion } from "framer-motion";
import StarBorder from "./StarBorder";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  return (
    <motion.div
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer"
    >
      <StarBorder
        as="div"
        className={`${isSelected ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
        color={isSelected ? "white" : "white/50"}
        speed="5s"
      >
        <span className={`text-xs sm:text-sm md:text-base font-medium ${
          isSelected ? "text-white" : "text-white/70"
        }`}>
          {name}
        </span>
      </StarBorder>
    </motion.div>
  );
};

export default ProjectTag;
