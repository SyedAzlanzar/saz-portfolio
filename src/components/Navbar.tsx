"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Logo from "../../public/assets/logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
   const handleScroll = () => {
  const sections = ["home", "about", "projects", "services", "contact"];
  let closestSection = "";
  let minDistance = Infinity;

  sections.forEach((section) => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const distanceFromTop = Math.abs(rect.top);
        if (distanceFromTop < minDistance) {
          minDistance = distanceFromTop;
          closestSection = section;
        }
      }
    }
  });

  if (closestSection) {
    setActiveSection(closestSection);
  }
};


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/60  backdrop-blur-xl hidden md:block"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-custom h-8">
            <Image alt="logo" src={Logo} className="h-full w-full" />
          </Link>
          <div className="space-x-4">
            {["home", "about", "projects", "services", "contact"].map(
              (section) => (
                <Button
                  key={section}
                  variant="ghost"
                  className={
                    activeSection === section ? "text-primary-custom" : ""
                  }
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              )
            )}
          </div>
          {/* <Link href={"/assets/resume.pdf"} target="_blank">
            <Button variant="outline">View Resume</Button>
          </Link> */}
        </div>
      </motion.nav>

      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl md:hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-custom h-8">
            <Image alt="logo" src={Logo} className="h-full w-full" />
          </Link>

          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <MdClose size={24} className="text-primary-custom" />
            ) : (
              <FaBars size={24} className="text-primary-custom" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 py-4 shadow-md">
            <ul className="flex flex-col items-center  space-y-4">
              {["home", "about", "projects", "services", "contact"].map(
                (section) => (
                  <li key={section}>
                    <button
                      className={`text-lg ${
                        activeSection === section ? "text-primary-custom" : ""
                      }`}
                      onClick={() => {
                        scrollToSection(section);
                        setIsMenuOpen(false);
                      }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </li>
                )
              )}
              <li>
                <Link href={"/assets/resume.pdf"} target="_blank">
                  <Button variant="outline">View Resume</Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </motion.nav>
    </Fragment>
  );
};

export default Navbar;
