import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="group">
      <div
        className="h-52 md:h-72 rounded-t-xl relative overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#1A1A1A] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-90 transition-all duration-500">
          <Link
            target="_blank"
            href={gitUrl}
            passHref={true}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-white/20 hover:border-white transition-colors duration-300 group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-white/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-colors duration-300" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-white/20 hover:border-white transition-colors duration-300 group/link"
          >
            <EyeIcon className="h-10 w-10 text-white/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-colors duration-300" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#1A1A1A] py-6 px-4 border border-white/10">
        <h5 className="text-xl font-semibold mb-2 text-white">{title}</h5>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
