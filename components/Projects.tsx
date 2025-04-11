"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = {
    all: [
      {
        imgUrl: "/project1.jpg",
        title: "Project 1",
        description: "Description for project 1",
        gitUrl: "https://github.com",
        previewUrl: "https://example.com",
      },
      // Add more projects here
    ],
    web: [
      {
        imgUrl: "/project2.jpg",
        title: "Project 2",
        description: "Description for project 2",
        gitUrl: "https://github.com",
        previewUrl: "https://example.com",
      },
      // Add more web projects here
    ],
    mobile: [
      {
        imgUrl: "/project3.jpg",
        title: "Project 3",
        description: "Description for project 3",
        gitUrl: "https://github.com",
        previewUrl: "https://example.com",
      },
      // Add more mobile projects here
    ],
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          containerClassName="mb-4"
          size="lg"
        >
          My Projects
        </ScrollReveal>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          containerClassName="mb-4"
          size="md"
        >
          Here are some of the projects I've worked on. Each project represents a unique challenge and learning opportunity.
        </ScrollReveal>
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.keys(projects).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab as keyof typeof projects].map((project, index) => (
            <ProjectCard
              key={index}
              imgUrl={project.imgUrl}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 