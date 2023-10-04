"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="lg:py-16">
      <div className="flex flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-lg sm:text-xl lg:text-3xl lg:leading-normal font-extrabold">
            <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "} Syihabudin Rahmat R.
            </span>
            <br></br>
            <div className="text">
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
            />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-sm sm:text-base mb-6 lg:text-lg">
           Welcome to my personal website. I am a software engineer based in Yogyakarta, Indonesia. I am currently working at (-)  I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field.
           </p>
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 text-center w-full md:w-fit rounded-full mr-4 text-white border-white border-2 hover:border-black hover:text-black hover:bg-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://www.linkedin.com/in/syihabudin-rahmat-ramadhan-1b29651b5/"
              passHref={true}
              className="px-1 inline-block py-1 text-center w-full md:w-fit rounded-full text-white border-white border-2 hover:border-black hover:text-black hover:bg-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-white rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/profile.jpeg"
              priority={true}
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
