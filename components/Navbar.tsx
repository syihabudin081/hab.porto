"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#181818]/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="#home" className="text-white text-xl font-bold">
              Syihabudin
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-sm font-medium">
                {isOpen ? "Close" : "Menu"}
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#181818]/80 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-white text-sm font-medium hover:text-gray-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;