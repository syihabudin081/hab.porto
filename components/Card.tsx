import Image from "next/image";

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
  image
}) => {
  return (
        <div className="card">
        <div className="flex gap-3 items-center">
          <Image src={image} alt={title} width={50} height={50} />
          <div>
            <h4 className=" text-base font-semibold">{title}</h4>
            <p className="text-sm font-light">
              {institution} - {degree}
              <br />
              {startYear} - {endYear}
              <br />
            </p>{" "}
          </div>
        </div>
        <br />
        
      </div>
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
    <div className="card">
      <div className="flex gap-3 items-center">
        <Image src={image} alt={company} width={50} height={50} />
        <div>
          <h4 className=" text-base font-semibold">{role}</h4>
          <p className="text-sm font-light">
            {company}
            <br />
            {startYear} - {endYear}
            <br />
          </p>{" "}
        </div>
      </div>
      <br />
      <div className="text-sm font-light">{desc}</div>
    </div>
  );
};

const SkillCard: React.FC<SkillCardProps> = ({ title, image }) => {
  return (
    <div className="shadow-sm rounded-md overflow-hidden ">
      <Image src={image} alt={title} className="" width={32} height={32} />
      <div className="py-4">
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
    </div>
  );
};

const CardComponents = { SkillCard, EducationCard, ExperienceCard };
export default CardComponents;
