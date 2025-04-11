"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const projectsData = [
  {
    id: 1,
    title: "Nusabasa",
    description: "Nusabasa, a digital learning app for Indonesian regional languages, aims toengage and educate the youth. In this project, I took charge of the backend development and deployment of the application, ensuring that our platform runs smoothly and efficiently.",
    image: "/nusabasa.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://gitlab.com/nusabasa",
    previewUrl: "google.com",
  }, {
    id: 2,
    title: "MyGram",
    description: "This is my Hacktiv8 project where I've created an API for an Instagram clone. The project is built using the Golang programming language and the Gin framework.",
    image: "/golang.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/syihabudin081/mygram",
    previewUrl: "google.com",
},

  


];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        containerClassName="mb-8 md:mb-12"
        size="xl"
      >
        My Projects
      </ScrollReveal>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 py-6">
        {["All", "Web", "Mobile"].map((tagName) => (
          <ProjectTag
            key={tagName}
            name={tagName}
            onClick={() => handleTagChange(tagName)}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;