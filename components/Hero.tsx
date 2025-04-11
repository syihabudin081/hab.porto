"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import StarBorder from "./StarBorder";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 text-center md:text-left"
      >
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          containerClassName="mb-4"
          size="xl"
        >
          Hi, I'm Syihab
        </ScrollReveal>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">
          <TypeAnimation
            sequence={[
              "Front End Developer",
              1000,
              "Backend Developer",
              1000,
              "Devops",
              1000,
              "Cloud Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-normal"
          />
        </div>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          containerClassName="mt-8"
          size="md"
        >
          Welcome to my personal website. I am a software engineer based in Jakarta, Indonesia. I am currently working at Ordent (Placement at Bank BRI) as a Backend Developer. I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field.
        </ScrollReveal>
        <motion.div
          className="flex flex-col gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-start gap-3 sm:gap-4 mt-4">
            <div className="flex items-center gap-2 bg-[#1A1A1A] px-3 sm:px-4 py-2 rounded-lg border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs sm:text-sm text-gray-300">Available for work</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1A1A1A] px-3 sm:px-4 py-2 rounded-lg border border-white/10">
              <span className="text-xs sm:text-sm text-gray-300">Based in Yogyakarta, Indonesia</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex justify-center"
      >
        <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/profile.jpeg"
            priority={true}
            alt="hero image"
            className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={400}
            height={400}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
