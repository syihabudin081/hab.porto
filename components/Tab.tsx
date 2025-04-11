import React from "react";
import { motion } from "framer-motion";
import StarBorder from "./StarBorder";

interface TabProps {
  children: React.ReactNode;
  selectTab: () => void;
  active: boolean;
}

const Tab: React.FC<TabProps> = ({ children, selectTab, active }) => {
  return (
    <motion.div
      onClick={selectTab}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer"
    >
      <StarBorder
        as="div"
        className={`${active ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
        color={active ? "white" : "gray"}
        speed="5s"
      >
        <span className={`text-xs sm:text-sm md:text-base font-medium ${
          active ? "text-white" : "text-gray-400"
        }`}>
          {children}
        </span>
      </StarBorder>
    </motion.div>
  );
};

export default Tab;
