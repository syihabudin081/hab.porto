"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Tab from "./Tab";
import CardComponents from "./Card";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CardComponents.SkillCard title="Node.js" image="/nodejs.png" />
        <CardComponents.SkillCard title="Javascript" image="/javascript.png" />
        <CardComponents.SkillCard title="React" image="/react.png" />
        <CardComponents.SkillCard title="Golang" image="/golang.png" />
        <CardComponents.SkillCard title="Next.js" image="/next.svg" />
        <CardComponents.SkillCard
          title="Google Cloud Platform"
          image="/gcp.png"
        />
        <CardComponents.SkillCard
          title="Amazon Web Services"
          image="/aws.png"
        />
      </motion.div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.div 
        className="flex flex-col gap-4 sm:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CardComponents.EducationCard
          image="/upn.png"
          title="Informatics Engineering"
          institution="UPN Veteran Yogyakarta"
          degree="S.Kom."
          startYear="2020"
          endYear="Present"
        />
      </motion.div>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <motion.div 
        className="flex flex-col gap-4 sm:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CardComponents.ExperienceCard
          image="/bangkit.jpeg"
          role="Google Bangkit 2023 Participant - Cloud Computing Learning Path"
          company="Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka · Apprenticeship"
          startYear="Feb 2023"
          endYear="Jul 2023"
          desc="I am a proud graduate of the Google Bangkit 2023 program, specializing in the Cloud Computing Learning Path. Through this apprenticeship, I gained invaluable hands-on experience with Google Cloud, expanding my knowledge of cloud technologies. As a key contributor to the capstone project Nusabasa, an e-learning platform for regional Indonesian languages, I played a critical role in backend development, CI/CD processes, and cloud infrastructure management. I successfully integrated machine learning features, including question generation and a chatbot, into the application"
        />
        <CardComponents.ExperienceCard
          image="/chairos.jpeg"
          role="Studi Independen"
          company="Chairos Academy · Apprenticeship"
          startYear="Aug 2022"
          endYear="Dec 2022"
          desc="Learned about various AWS services, Completed hands-on exercises and projects to gain practical experience with the platform, worked on a final project in which I developed a web-based inventory management system for a company that buys and sells outdoor equipment, integrated the system with the cloud using AWS services, allowing for real-time updates and improved scalability."
        />
      </motion.div>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="w-full max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            containerClassName="mb-6 sm:mb-8"
            size="xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
              About Me
            </h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-20"></div>
            <motion.div 
              className="relative bg-[#1A1A1A] p-4 sm:p-6 rounded-lg border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row justify-start gap-2 sm:gap-4 mb-4 sm:mb-6">
                <Tab
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  Skills
                </Tab>
                <Tab
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  Education
                </Tab>
                <Tab
                  selectTab={() => handleTabChange("experiences")}
                  active={tab === "experiences"}
                >
                  Experience
                </Tab>
              </div>
              <motion.div 
                className="mt-4 sm:mt-6"
                key={tab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {TAB_DATA.find((t) => t.id === tab)?.content ?? null}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
