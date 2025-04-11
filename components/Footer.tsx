"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="py-8 bg-[#181818]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            containerClassName="text-center md:text-left"
          >
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Syihabudin Rahmat Ramadhan. All rights reserved.
            </p>
          </ScrollReveal>
          <div className="flex gap-4">
            <Link
              href="https://github.com/syihabudin081"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <Image
                src="/github-icon.svg"
                alt="Github"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/syihabudin-rahmat-ramadhan-1b29651b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <Image
                src="/linkedin-icon.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;