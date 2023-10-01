"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Tab from "./Tab";
import CardComponents from "./Card";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 gap-4 ">
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
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (

      <div className="flex flex-col gap-12">
        <CardComponents.EducationCard
        image="/upn.png"
        title="Informatics Engineering"
        institution="UPN Veteran Yogyakarta"
        degree="S.Kom."
        startYear="2020"
        endYear="Present"
        />
      </div>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
        <div className="flex flex-col gap-12">
        <CardComponents.ExperienceCard
        image="/bangkit.jpeg"
       role="Google Bangkit 2023 Participant - Cloud Computing Learning Path"
        company="Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka · Apprenticeship"
        startYear="Feb 2023"
        endYear="Jul 2023"
        desc=" am a proud graduate of the Google Bangkit 2023 program, specializing in the Cloud Computing Learning Path. Through this apprenticeship, I gained invaluable hands-on experience with Google Cloud, expanding my knowledge of cloud technologies. As a key contributor to the capstone project Nusabasa, an e-learning platform for regional Indonesian languages, I played a critical role in backend development, CI/CD processes, and cloud infrastructure management. I successfully integrated machine learning features, including question generation and a chatbot, into the application"
      />
      <CardComponents.ExperienceCard
      image="/chairos.jpeg"
      role="Studi Independen "
       company="Chairos Academy · Apprenticeship"
       startYear="Aug 2022"
       endYear="Dec 2022"
       desc=" Learned about various AWS services, Completed hands-on exercises and projects to gain practical experience with the platform, worked on a final project in which I developed a web-based inventory management system for a company that buys and sells outdoor equipment, integrated the system with the cloud using AWS services, allowing for real-time updates and improved scalability."
     />
     </div>
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
    <section className="text-white" id="about">
      <div className="  items-center py-8  xl:gap-16 sm:py-16 ">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-[#ADB7BE] text-sm sm:text-base  lg:text-lg">
            Hello, I&rsquo;m Syihab, a highly motivated informatics student
            passionate about cloud computing, backend development, and frontend
            development. I bring hands-on experience with Google Cloud (GCP),
            proficiency in backend technologies like Node.js and Golang, and
            expertise in crafting user-friendly interfaces using React and
            Next.js. I&rsquo;m excited about the prospect of collaborating on
            cutting-edge tech initiatives. If you share a similar passion or
            have exciting opportunities, please don&rsquo;t hesitate to reach
            out. Thank you!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <Tab
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </Tab>
            <Tab
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </Tab>
            <Tab
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experience{" "}
            </Tab>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content ?? null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
