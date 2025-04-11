import Image from "next/image";
import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  image: string;
}

interface EducationCardProps {
  title: string;
  institution: string;
  degree?: string;
  startYear: string;
  endYear: string;
  image: string;
}

interface ExperienceCardProps {
  image: string;
  company: string;
  role: string;
  startYear: string;
  endYear: string;
  desc: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  institution,
  degree,
  startYear,
  endYear,
  image,
}) => {
  return (
    <motion.div 
      className="card bg-[#1E1E1E] p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-sm sm:text-base font-medium text-white">{title}</h4>
          <p className="text-xs text-gray-400 font-light">
            {institution} - {degree}
            <br />
            <span className="text-blue-400 font-normal">{startYear} - {endYear}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  image,
  company,
  role,
  startYear,
  endYear,
  desc,
}) => {
  return (
    <motion.div 
      className="card bg-[#1E1E1E] p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image src={image} alt={company} layout="fill" objectFit="cover" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h4 className="text-sm sm:text-base font-medium text-white">{role}</h4>
          <p className="text-xs text-gray-400 font-light">
            {company}
            <br />
            <span className="text-blue-400 font-normal">{startYear} - {endYear}</span>
          </p>
          <p className="mt-2 sm:mt-4 text-xs text-gray-300 leading-relaxed font-light">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const SkillCard: React.FC<SkillCardProps> = ({ title, image }) => {
  return (
    <motion.div 
      className="bg-[#1E1E1E] p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4">
        <Image src={image} alt={title} layout="fill" objectFit="contain" />
      </div>
      <h3 className="text-sm sm:text-base font-medium text-white text-center">{title}</h3>
    </motion.div>
  );
};

const CardComponents = { SkillCard, EducationCard, ExperienceCard };
export default CardComponents;

